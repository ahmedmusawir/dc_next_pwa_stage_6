/**
 *
 * <Box />
 *
 * A Simple div Container with Props
 * This is to deliver minimum heigh to a group of unevent content blocks
 */
import styled from 'styled-components';

export const Box = styled.div`
	min-height: ${props => props.minHeight};
	min-width: ${props => props.minWidth};
`;

Box.defaultProps = {
	theme: {},
	minHeight: '2rem',
	minWidth: '',
};

export default Box;
