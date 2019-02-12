import styled from 'styled-components';

const getBackground = props => {
	let bgColor;
	const themeBgColor = props.theme.palette.background;

	if (props.bgImgLink) {
		bgColor = `url(${props.bgImgLink})`;
	} else if (props.bgColor === 'dark') {
		bgColor = themeBgColor.dark;
	} else if (props.bgColor === 'light') {
		bgColor = themeBgColor.light;
	} else if (props.bgColor === 'grey') {
		bgColor = themeBgColor.grey;
	} else if (props.bgColor === 'dimgray') {
		bgColor = themeBgColor.dimgray;
	} else if (props.bgColor === 'gradient') {
		bgColor = themeBgColor.gradient;
	} else {
		bgColor = themeBgColor.neutral;
	}
	return bgColor;
};

export const Paragraph = styled.div`
	background: ${props => getBackground(props)};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;

	padding: ${props => (props.padding ? props.padding : '1rem')};
	margin: 15px;

	width: 100%;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a {
		padding-top: 0.6rem;
		padding-bottom: 0.6rem;
	}

	img {
		padding: ${props => (props.padding ? props.padding : '0.5rem')};
	}
`;

export default Paragraph;
