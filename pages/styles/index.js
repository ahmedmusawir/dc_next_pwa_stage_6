import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import styled from 'styled-components';
import {
	Img,
	Col,
	Row,
	Button,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
} from 'components/general';

const BtnStyled = styled(Button)`
	margin-top: 2rem;
	margin-bottom: 2rem;
	border-radius: 50px;
	padding: 1rem 2rem;
`;

const Styles = () => (
	<Layout
		title="Deep Cast - Styles"
		description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
	>
		<PageContainer className="mb-5 pb-5">
			<Row>
				<Img src="https://video-react.js.org/assets/logo.png" alt="DeepCast" />
				<Col sm="12" md="12" lg="12">
					<H1>This is a test of h1</H1>
					<H2>This is a test of h2 Tag</H2>
					<H3>This is a test of h3 Tag</H3>
					<H4>This is a test of h4 Tag</H4>
					<H5>This is a test of h5 Tag</H5>
					<H6>This is a test of h6 Tag</H6>
				</Col>
			</Row>
			<Row>
				<Col sm="12" md="12" lg="12">
					<P>
						This is a test of p Tag. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
						et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
						dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
						voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
						Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
						dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
						elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
						magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
						justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet.
					</P>
				</Col>
			</Row>
		</PageContainer>
	</Layout>
);

export default Styles;
