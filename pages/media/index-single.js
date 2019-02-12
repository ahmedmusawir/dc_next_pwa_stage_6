import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Layout, PageContainer } from 'components/layout';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
	Img,
	Div,
	Form,
	FormGroup,
	Input,
	Button,
	Small,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const SearchBox = styled.div`
	* {
		box-sizing: border-box;
	}

	/* Style the search field */
	form.media-search input[type='text'] {
		padding: 10px;
		font-size: 17px;
		border: 1px solid grey;
		float: right;
		width: 50%;
		background: #f1f1f1;
	}

	/* Style the submit button */
	form.media-search button {
		float: right;
		width: 20%;
		padding: 0.75rem;
		background: dodgerblue;
		color: white;
		font-size: 17px;
		border: 1px solid dodgerblue;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
	}

	form.example button:hover {
		background: #0b7dda;
	}

	/* Clear floats */
	form.media-search::after {
		content: '';
		clear: both;
		display: table;
	}
`;

class Media extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - Media Page"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* MEDIA HERO SECTION */}
				<SectionBackground bgColor="gradient">
					<PageContainer>
						<Section height="20rem" gridStart="1150px" className="media-hero">
							<Block flexBasis="50" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H2 fontWeight="800" light>
											Media or message to describe content
										</H2>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50" className="hero-block-2">
								<Paragraph>
									<SearchBox>
										{/* The form */}
										<form className="media-search">
											<button type="submit">
												<i className="fa fa-search" />
											</button>
											<input type="text" placeholder="Search.." name="search" />
										</form>
									</SearchBox>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* MEDIA ARTICLE 1 */}
				<SectionBackground bgColor="grey" className="media-article">
					<PageContainer>
						<Section gridStart="1199px">
							<Block>
								<Paragraph>
									<H6 italic>
										<Small>February 14th, 2019</Small>
										<hr />
									</H6>
								</Paragraph>
							</Block>
							<Block flexBasis="35" align="flex-start">
								<Paragraph>
									<H3 fontWeight="800">Company's event meeting or news</H3>
								</Paragraph>
							</Block>
							<Block flexBasis="65">
								<Paragraph>
									<Fade>
										<P>
											Our results are reflected on our customers opinions Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
										</P>
										<P>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
										</P>
										<Img
											src="/static/images/_media/media-article-1.jpg"
											alt="Deep Cast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* MEDIA ARTICLE 2 */}
				<SectionBackground bgColor="grey" className="media-article">
					<PageContainer>
						<Section gridStart="1199px">
							<Block>
								<Paragraph>
									<H6 italic>
										<Small>February 14th, 2019</Small>
										<hr />
									</H6>
								</Paragraph>
							</Block>
							<Block flexBasis="35" align="flex-start">
								<Paragraph>
									<H3 fontWeight="800">Company's event meeting or news</H3>
								</Paragraph>
							</Block>
							<Block flexBasis="65">
								<Paragraph>
									<Fade>
										<P>
											Our results are reflected on our customers opinions Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
										</P>
										<P>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
										</P>
										<Img
											src="https://picsum.photos/295/300?image=9"
											alt="Deep Cast"
											className="img-fluid float-left"
										/>
										<Img
											src="https://picsum.photos/295/300?image=20"
											alt="Deep Cast"
											className="img-fluid float-right"
										/>
										<P>
											Our results are reflected on our customers opinions Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
										</P>
										<P>
											Our results are reflected on our customers opinions Lorem
											ipsum dolor sit amet consectetur adipisicing elit. Quam
											expedita facilis similique sapiente veritatis
											exercitationem quae amet debitis itaque assumenda ad atque
											ipsum dolor sit amet consectetur adipisicing elit. Quam
										</P>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
						<Section height="10rem">
							<Block className="text-center">
								<Paragraph>
									<Div className="media-pagination">
										<H5 className="float-left">
											<i className="fa fa-arrow-circle-left fa-2x " />
										</H5>
										<H5 className="page-numbers" italic>
											1 or 8
										</H5>
										<H5 className="float-right">
											<i className="fa fa-arrow-circle-right fa-2x " />
										</H5>
									</Div>
									<hr />
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="blue" className="home-subscription">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="60">
								<Paragraph padding="4rem">
									<Fade bottom cascade>
										<H4 light fontWeight="800">
											More to Come!
										</H4>
										<H5 light>
											Sign up for our newsletter to get the latest product
											announcements
										</H5>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="40">
								<Paragraph className="form-container">
									<Fade>
										<Form>
											<FormGroup>
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
												/>
											</FormGroup>
											<Button color="danger" className="float-right mt-1">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

export default Media;
