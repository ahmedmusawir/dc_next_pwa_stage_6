import _assign from "lodash/assign";
import _defaults from "lodash/defaults";

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
import React from "react";
import { Log, Helpers, Scale, Axis, Wrapper } from "victory-core";

function getAxisProps(child, props, calculatedProps) {
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      originSign = calculatedProps.originSign,
      stringMap = calculatedProps.stringMap,
      categories = calculatedProps.categories,
      horizontal = calculatedProps.horizontal;
  var childProps = child.props || {};
  var axis = child.type.getAxis(childProps);
  var currentAxis = Axis.getCurrentAxis(axis, horizontal);
  var otherAxis = axis === "x" ? "y" : "x";
  var axisOffset = getAxisOffset(props, calculatedProps);
  var offsetY = axis === "y" ? undefined : axisOffset.y;
  var offsetX = axis === "x" ? undefined : axisOffset.x;
  var crossAxis = childProps.crossAxis === false ? false : true;
  var orientation = Axis.getOrientation(child, axis, originSign[otherAxis]);
  return {
    stringMap: stringMap[currentAxis],
    categories: categories[currentAxis],
    startAngle: props.startAngle,
    endAngle: props.endAngle,
    innerRadius: props.innerRadius,
    domain: domain,
    scale: scale,
    offsetY: childProps.offsetY !== undefined ? childProps.offsetY : offsetY,
    offsetX: childProps.offsetX !== undefined ? childProps.offsetX : offsetX,
    crossAxis: crossAxis,
    orientation: orientation
  };
}

function getChildProps(child, props, calculatedProps) {
  var axisChild = Axis.findAxisComponents([child]);

  if (axisChild.length > 0) {
    return getAxisProps(axisChild[0], props, calculatedProps);
  }

  var categories = calculatedProps.categories,
      domain = calculatedProps.domain,
      range = calculatedProps.range,
      scale = calculatedProps.scale;
  return {
    categories: categories,
    domain: domain,
    range: range,
    scale: scale
  };
}

function getStyles(props) {
  var styleProps = props.style && props.style.parent;
  return {
    parent: _defaults({}, styleProps, {
      height: "100%",
      width: "100%",
      userSelect: "none"
    })
  };
}

function getCalculatedProps(props, childComponents) {
  var style = getStyles(props);
  var horizontal = Helpers.isHorizontal(props); // TODO: check

  var categories = Wrapper.getCategories(props, childComponents);
  var stringMap = createStringMap(props, childComponents);
  var axisComponents = {
    x: Axis.getAxisComponent(childComponents, "x"),
    y: Axis.getAxisComponent(childComponents, "y")
  };
  var domain = {
    x: getDomain(_assign({}, props, {
      categories: categories
    }), "x", childComponents),
    y: getDomain(_assign({}, props, {
      categories: categories
    }), "y", childComponents)
  };
  var range = {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  var baseScale = {
    x: Scale.getScaleFromProps(props, "x") || axisComponents.x && axisComponents.x.type.getScale(axisComponents.x.props) || Scale.getDefaultScale(),
    y: Scale.getScaleFromProps(props, "y") || axisComponents.y && axisComponents.y.type.getScale(axisComponents.y.props) || Scale.getDefaultScale()
  };
  var scale = {
    x: baseScale.x.domain(domain.x).range(range.x),
    y: baseScale.y.domain(domain.y).range(range.y)
  };
  var origin = props.polar ? Helpers.getPolarOrigin(props) : Axis.getOrigin(domain);
  var originSign = {
    x: Axis.getOriginSign(origin.x, domain.x),
    y: Axis.getOriginSign(origin.y, domain.y)
  };
  var defaultDomainPadding = getDefaultDomainPadding(childComponents, horizontal);
  var padding = Helpers.getPadding(props);
  return {
    axisComponents: axisComponents,
    categories: categories,
    domain: domain,
    range: range,
    horizontal: horizontal,
    scale: scale,
    stringMap: stringMap,
    style: style,
    origin: origin,
    originSign: originSign,
    defaultDomainPadding: defaultDomainPadding,
    padding: padding
  };
}

function getChildren(props, childComponents, calculatedProps) {
  childComponents = childComponents || getChildComponents(props);
  calculatedProps = calculatedProps || getCalculatedProps(props, childComponents);
  var baseStyle = calculatedProps.style.parent;
  var height = props.height,
      polar = props.polar,
      theme = props.theme,
      width = props.width;
  var _calculatedProps = calculatedProps,
      origin = _calculatedProps.origin,
      horizontal = _calculatedProps.horizontal;
  var parentName = props.name || "chart";
  return childComponents.map(function (child, index) {
    var role = child.type && child.type.role;
    var style = Array.isArray(child.props.style) ? child.props.style : _defaults({}, child.props.style, {
      parent: baseStyle
    });
    var childProps = getChildProps(child, props, calculatedProps);
    var name = child.props.name || "".concat(parentName, "-").concat(role, "-").concat(index);

    var newProps = _defaults({
      horizontal: horizontal,
      height: height,
      polar: polar,
      theme: theme,
      width: width,
      style: style,
      name: name,
      origin: polar ? origin : undefined,
      padding: calculatedProps.padding,
      key: "".concat(name, "-key-").concat(index),
      standalone: false
    }, childProps);

    return React.cloneElement(child, newProps);
  });
}

var getChildComponents = function (props, defaultAxes) {
  var childComponents = React.Children.toArray(props.children);

  if (childComponents.length === 0) {
    return [defaultAxes.independent, defaultAxes.dependent];
  }

  var axisComponents = {
    dependent: Axis.getAxisComponentsWithParent(childComponents, "dependent"),
    independent: Axis.getAxisComponentsWithParent(childComponents, "independent")
  };

  if (axisComponents.dependent.length === 0 && axisComponents.independent.length === 0) {
    return childComponents.concat([defaultAxes.independent, defaultAxes.dependent]);
  }

  var axisCount = 0;
  return childComponents.filter(function (child) {
    var role = child.type && child.type.role;
    var childProps = child.props || {};

    if (role !== "axis" || childProps.dependentAxis) {
      return true;
    } else if (axisCount < 1) {
      axisCount++;
      return true;
    } else {
      var msg = "Only one independent VictoryAxis component is allowed when " + "using the VictoryChart wrapper. Only the first axis will be used. Please compose " + "multi-axis charts manually";
      Log.warn(msg);
      return false;
    }
  });
};

var getDefaultDomainPadding = function (childComponents, horizontal) {
  var groupComponent = childComponents.filter(function (child) {
    return child.type && child.type.role && child.type.role === "group";
  });

  if (groupComponent.length < 1) {
    return undefined;
  }

  var _groupComponent$0$pro = groupComponent[0].props,
      offset = _groupComponent$0$pro.offset,
      children = _groupComponent$0$pro.children;
  return horizontal ? {
    y: offset * children.length / 2
  } : {
    x: offset * children.length / 2
  };
};

var getDomain = function (props, axis, childComponents) {
  childComponents = childComponents || React.Children.toArray(props.children);
  var domain = Wrapper.getDomain(props, axis, childComponents);
  var axisComponent = Axis.getAxisComponent(childComponents, axis);
  var invertDomain = axisComponent && axisComponent.props && axisComponent.props.invertAxis;
  return invertDomain ? domain.concat().reverse() : domain;
}; // eslint-disable-next-line complexity


var getAxisOffset = function (props, calculatedProps) {
  var axisComponents = calculatedProps.axisComponents,
      scale = calculatedProps.scale,
      origin = calculatedProps.origin,
      domain = calculatedProps.domain,
      originSign = calculatedProps.originSign,
      padding = calculatedProps.padding;
  var top = padding.top,
      bottom = padding.bottom,
      left = padding.left,
      right = padding.right; // make the axes line up, and cross when appropriate

  var axisOrientations = {
    x: Axis.getOrientation(axisComponents.x, "x", originSign.y),
    y: Axis.getOrientation(axisComponents.y, "y", originSign.x)
  };
  var orientationOffset = {
    y: axisOrientations.x === "bottom" ? bottom : top,
    x: axisOrientations.y === "left" ? left : right
  };
  var originOffset = {
    x: axisOrientations.y === "left" ? 0 : props.width,
    y: axisOrientations.x === "bottom" ? props.height : 0
  };
  var originPosition = {
    x: origin.x === domain.x[0] || origin.x === domain.x[1] ? 0 : scale.x(origin.x),
    y: origin.y === domain.y[0] || origin.y === domain.y[1] ? 0 : scale.y(origin.y)
  };
  var calculatedOffset = {
    x: originPosition.x ? Math.abs(originOffset.x - originPosition.x) : orientationOffset.x,
    y: originPosition.y ? Math.abs(originOffset.y - originPosition.y) : orientationOffset.y
  };
  return {
    x: axisComponents.x && axisComponents.x.offsetX !== undefined ? axisComponents.x.offsetX : calculatedOffset.x,
    y: axisComponents.y && axisComponents.y.offsetY !== undefined ? axisComponents.y.offsetY : calculatedOffset.y
  };
};

var createStringMap = function (props, childComponents) {
  var allStrings = Wrapper.getStringsFromChildren(props, childComponents);
  var x = !allStrings.x || allStrings.x.length === 0 ? null : allStrings.x.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  var y = !allStrings.y || allStrings.y.length === 0 ? null : allStrings.y.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  return {
    x: x,
    y: y
  };
};

export { getChildren, getCalculatedProps, getChildComponents };