import _includes from "lodash/includes";
import _isEqual from "lodash/isEqual";
import _isEmpty from "lodash/isEmpty";
import _orderBy from "lodash/orderBy";
import _property from "lodash/property";
import _isPlainObject from "lodash/isPlainObject";
import _isFunction from "lodash/isFunction";
import _last from "lodash/last";
import _range from "lodash/range";
import _uniq from "lodash/uniq";
import _assign from "lodash/assign";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
import React from "react";
import Helpers from "./helpers";
import Collection from "./collection";
import Scale from "./scale";
import Immutable from "./immutable"; // Private Functions

function parseDatum(datum) {
  var immutableDatumWhitelist = {
    errorX: true,
    errorY: true
  };
  return Immutable.isImmutable(datum) ? Immutable.shallowToJS(datum, immutableDatumWhitelist) : datum;
}

function getLength(data) {
  return Immutable.isIterable(data) ? data.size : data.length;
} // Returns generated data for a given axis based on domain and sample from props


function generateDataArray(props, axis) {
  var propsDomain = _isPlainObject(props.domain) ? props.domain[axis] : props.domain;
  var domain = propsDomain || Scale.getBaseScale(props, axis).domain();
  var samples = props.samples || 1;
  var domainMax = Math.max.apply(Math, _toConsumableArray(domain));
  var domainMin = Math.min.apply(Math, _toConsumableArray(domain));
  var step = (domainMax - domainMin) / samples;

  var values = _range(domainMin, domainMax, step);

  return _last(values) === domainMax ? values : values.concat(domainMax);
} // Returns sorted data. If no sort keys are provided, data is returned unaltered.


function sortData(dataset, sortKey) {
  var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ascending";

  if (!sortKey) {
    return dataset;
  } // Ensures previous VictoryLine api for sortKey prop stays consistent


  if (sortKey === "x" || sortKey === "y") {
    sortKey = "_".concat(sortKey);
  }

  var order = sortOrder === "ascending" ? "asc" : "desc";
  return _orderBy(dataset, sortKey, order);
} // This method will remove data points that break certain scales. (log scale only)


function cleanData(dataset, props) {
  var scaleType = {
    x: Scale.getScaleType(props, "x"),
    y: Scale.getScaleType(props, "y")
  };

  if (scaleType.x !== "log" && scaleType.y !== "log") {
    return dataset;
  }

  var rules = function (datum, axis) {
    return scaleType[axis] === "log" ? datum["_".concat(axis)] !== 0 : true;
  };

  return dataset.filter(function (datum) {
    return rules(datum, "x") && rules(datum, "y") && rules(datum, "y0");
  });
} // Returns a data accessor given an eventKey prop


function getEventKey(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (_isFunction(key)) {
    return key;
  } else if (key === null || key === undefined) {
    return function () {
      return undefined;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return _property(key);
} // Returns data with an eventKey prop added to each datum


function addEventKeys(props, data) {
  var hasEventKeyAccessor = !!props.eventKey;
  var eventKeyAccessor = getEventKey(props.eventKey);
  return data.map(function (datum) {
    if (datum.eventKey !== undefined) {
      return datum;
    } else if (hasEventKeyAccessor) {
      var eventKey = eventKeyAccessor(datum);
      return eventKey !== undefined ? _assign({
        eventKey: eventKey
      }, datum) : datum;
    } else {
      return datum;
    }
  });
} // Exported Functions

/**
 * Returns an object mapping string data to numeric data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Object} an object mapping string data to numeric data
 */


function createStringMap(props, axis) {
  var currentAxis = Helpers.getCurrentAxis(axis, props.horizontal);
  var stringsFromAxes = getStringsFromAxes(props, currentAxis);
  var stringsFromCategories = getStringsFromCategories(props, currentAxis);
  var stringsFromData = getStringsFromData(props, axis);

  var allStrings = _uniq(_toConsumableArray(stringsFromAxes).concat(_toConsumableArray(stringsFromCategories), _toConsumableArray(stringsFromData)));

  return allStrings.length === 0 ? null : allStrings.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
}
/**
 * Reduces the size of a data array, such that it is <= maxPoints.
 * @param {Array} data: an array of data; must be sorted
 * @param {Number} maxPoints: maximum number of data points to return
 * @param {Number} startingIndex: the index of the data[0] *in the entire dataset*; this function
                   assumes `data` param is a subset of larger dataset that has been zoommed
  * @returns {Array} an array of data, a subset of data param
  */


function downsample(data, maxPoints) {
  var startingIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // ensures that the downampling of data while zooming looks good.
  var dataLength = getLength(data);

  if (dataLength > maxPoints) {
    // limit k to powers of 2, e.g. 64, 128, 256
    // so that the same points will be chosen reliably, reducing flicker on zoom
    var k = Math.pow(2, Math.ceil(Math.log2(dataLength / maxPoints)));
    return data.filter( // ensure modulo is always calculated from same reference: i + startingIndex
    function (d, i) {
      return (i + startingIndex) % k === 0;
    });
  }

  return data;
}
/**
 * Returns formatted data. Data accessors are applied, and string values are replaced.
 * @param {Array} dataset: the original domain
 * @param {Object} props: the props object
 * @param {Array} expectedKeys: an array of expected data keys
 * @returns {Array} the formatted data
 */


function formatData(dataset, props, expectedKeys) {
  var isArrayOrIterable = Array.isArray(dataset) || Immutable.isIterable(dataset);

  if (!isArrayOrIterable || getLength(dataset) < 1) {
    return [];
  }

  var defaultKeys = ["x", "y", "y0"];
  expectedKeys = Array.isArray(expectedKeys) ? expectedKeys : defaultKeys;
  var stringMap = {
    x: expectedKeys.indexOf("x") !== -1 ? createStringMap(props, "x") : undefined,
    y: expectedKeys.indexOf("y") !== -1 ? createStringMap(props, "y") : undefined,
    y0: expectedKeys.indexOf("y0") !== -1 ? createStringMap(props, "y") : undefined
  };

  var createAccessor = function (name) {
    return Helpers.createAccessor(props[name] !== undefined ? props[name] : name);
  };

  var accessor = expectedKeys.reduce(function (memo, type) {
    memo[type] = createAccessor(type);
    return memo;
  }, {});
  var preformattedData = _isEqual(expectedKeys, defaultKeys) && props.x === "_x" && props.y === "_y" && props.y0 === "_y0";
  var data = preformattedData ? dataset : dataset.reduce(function (dataArr, datum, index) {
    // eslint-disable-line complexity
    datum = parseDatum(datum);
    var fallbackValues = {
      x: index,
      y: datum
    };
    var processedValues = expectedKeys.reduce(function (memo, type) {
      var processedValue = accessor[type](datum);
      var value = processedValue !== undefined ? processedValue : fallbackValues[type];

      if (value !== undefined) {
        if (typeof value === "string" && stringMap[type]) {
          memo["".concat(type, "Name")] = value;
          memo["_".concat(type)] = stringMap[type][value];
        } else {
          memo["_".concat(type)] = value;
        }
      }

      return memo;
    }, {});

    var formattedDatum = _assign({}, processedValues, datum);

    if (!_isEmpty(formattedDatum)) {
      dataArr.push(formattedDatum);
    }

    return dataArr;
  }, []);
  var sortedData = sortData(data, props.sortKey, props.sortOrder);
  var cleanedData = cleanData(sortedData, props);
  return addEventKeys(props, cleanedData);
}
/**
 * Returns generated x and y data based on domain and sample from props
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function generateData(props) {
  var xValues = generateDataArray(props, "x");
  var yValues = generateDataArray(props, "y");
  var values = xValues.map(function (x, i) {
    return {
      x: x,
      y: yValues[i]
    };
  });
  return values;
}
/**
 * Returns an array of categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of categories
 */


function getCategories(props, axis) {
  var currentAxis = Helpers.getCurrentAxis(axis, props.horizontal);
  return props.categories && !Array.isArray(props.categories) ? props.categories[currentAxis] : props.categories;
}
/**
 * Returns an array of formatted data
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function getData(props) {
  return props.data ? formatData(props.data, props) : formatData(generateData(props), props);
}
/**
 * Returns an array of strings from axis tickValues for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromAxes(props, axis) {
  var tickValues = props.tickValues,
      tickFormat = props.tickFormat;
  var tickValueArray;

  if (!tickValues || !Array.isArray(tickValues) && !tickValues[axis]) {
    tickValueArray = tickFormat && Array.isArray(tickFormat) ? tickFormat : [];
  } else {
    tickValueArray = tickValues[axis] || tickValues;
  }

  return tickValueArray.filter(function (val) {
    return typeof val === "string";
  });
}
/**
 * Returns an array of strings from categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromCategories(props, axis) {
  if (!props.categories) {
    return [];
  }

  var categories = getCategories(props, axis);
  var categoryStrings = categories && categories.filter(function (val) {
    return typeof val === "string";
  });
  return categoryStrings ? Collection.removeUndefined(categoryStrings) : [];
}
/**
 * Returns an array of strings from data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromData(props, axis) {
  var isArrayOrIterable = Array.isArray(props.data) || Immutable.isIterable(props.data);

  if (!isArrayOrIterable) {
    return [];
  }

  var key = props[axis] === undefined ? axis : props[axis];
  var accessor = Helpers.createAccessor(key);
  var sortedData = sortData(props.data, props.sortKey, props.sortOrder);
  var dataStrings = sortedData.reduce(function (dataArr, datum) {
    datum = parseDatum(datum);
    dataArr.push(accessor(datum));
    return dataArr;
  }, []).filter(function (datum) {
    return typeof datum === "string";
  }); // return a unique set of strings

  return dataStrings.reduce(function (prev, curr) {
    if (curr !== undefined && curr !== null && prev.indexOf(curr) === -1) {
      prev.push(curr);
    }

    return prev;
  }, []);
}
/**
 * Checks whether a given component can be used to calculate date
 * @param {Component} component: a React component instance
 * @returns {Boolean} Returns true if the given component has a role included in the whitelist
 */


function isDataComponent(component) {
  var getRole = function (child) {
    return child && child.type ? child.type.role : "";
  };

  var role = getRole(component);

  if (role === "portal") {
    var children = React.Children.toArray(component.props.children);
    role = children.length ? getRole(children[0]) : "";
  }

  var whitelist = ["area", "bar", "boxplot", "candlestick", "errorbar", "group", "line", "pie", "scatter", "stack", "voronoi"];
  return _includes(whitelist, role);
}

export default {
  createStringMap: createStringMap,
  downsample: downsample,
  formatData: formatData,
  generateData: generateData,
  getCategories: getCategories,
  getData: getData,
  getStringsFromAxes: getStringsFromAxes,
  getStringsFromCategories: getStringsFromCategories,
  getStringsFromData: getStringsFromData,
  isDataComponent: isDataComponent
};