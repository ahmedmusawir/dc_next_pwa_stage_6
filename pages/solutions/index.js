import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Layout, PageContainer, QuoteSlider } from 'components/layout';
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
	Button,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Input,
	Chart,
	Small,
	SectionBackground,
} from 'components/general';

const MagnifierBox = styled.div`
	* {
		box-sizing: border-box;
	}
	margin: auto;
	margin-top: 2.5rem;
	width: 15rem;
	height: 15rem;
	border: 1rem solid #434343;
	border-radius: 50%;

	background: url(/static/images/_solutions/solutions-magnify-bg.jpg) fixed;
	background-position: left center;
	background-size: 220%;

	@media screen and (min-width: 1400px) {
		background-size: 165%;
	}
`;

const MagnifierBoxContainer = styled.section`
	width: 100%;
	height: 100%;
	background: url(/static/images/_solutions/solutions-magnify-bg.jpg) fixed;
	background-position: left center;
	background-size: 100%;
`;

// const QuoteSlider = styled.article`
// 	// border: 1px solid red;
// `;

const RelateMedia = styled.div`
	// border: 1px solid red;
`;

class Solutions extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - Solutions Page"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground
					bgImgLink="/static/images/_solutions/solution-header.jpg"
					parallax
				>
					<PageContainer>
						<Section height="lg" className="solutions-hero">
							<Block flexBasis="40" className="hero-block-1">
								<Paragraph className="text-center">
									<Fade>
										<H1 fontWeight="800" light>
											We partner for deeper improvements
										</H1>
										<H6 light>
											For operators looking to partner to build cutting edge
											solutions. For operators looking to partner to build
											cutting edge solutions. For operators looking to partner
											to build cutting.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & CHART BLOCK 1 */}
				<SectionBackground bgColor="grey" className="pt-5">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H4 fontWeight="800" className="mb-3">
											Automatic Forecasting
										</H4>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae. Lorem ipsum dolor, sit amet consectetur
											adipisicing elit. Molestias dolores quia sit harum
											accusamus quaerat repudiandae. Lorem ipsum dolor, sit amet
											consectetur adipisicing elit. Molestias dolores quia sit
											harum accusamus quaerat repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Chart type="wave" />
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & MAGNIFYING GLASS WITH PARALAX BACKGROUND BLOCK 2 */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexBasis="50" className="pt-5 pb-5">
								<MagnifierBoxContainer>
									<Paragraph>
										<Fade>
											<MagnifierBox />
										</Fade>
									</Paragraph>
								</MagnifierBoxContainer>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H4 light fontWeight="800" className="mb-3">
											Deeper Insights
										</H4>
										<H6 light>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae. repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & CHART BLOCK 3 */}
				<SectionBackground bgColor="grey">
					<PageContainer>
						<Section>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H4 fontWeight="800" className="mb-3">
											Automatic Forecasting
										</H4>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias repudiandae. Lorem ipsum dolor, sit amet
											consectetur adipisicing elit. Molestias dolores quia sit
											harum accusamus quaerat Molestias repudiandae.Lorem ipsum
											dolor, sit amet consectetur adipisicing elit. Molestias
											dolores quia sit harum accusamus quaerat Molestias
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<Chart type="linezoom" />
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CUSTOMER QUOTE BLOCK */}
				<SectionBackground bgColor="light" className="pt-5">
					<PageContainer>
						<Section gridStart="1267px">
							<Block flexBasis="40" align="flex-start">
								<Paragraph>
									<Fade>
										<H3 fontWeight="800" className="mb-3">
											Our results are reflected on our customers opinions
										</H3>
										<H4>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias repudiandae. repudiandae.
										</H4>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60">
								<Paragraph padding="0">
									<QuoteSlider
										autoPlay
										infiniteLoop={true}
										width="100%"
										className="solutions-pg-quote-slider"
										showStatus={false}
										showThumbs={false}
										showIndicators={false}
										imgLinks={[
											// Recommended image size 500x300
											'/static/images/_solutions/solutions-quote-slider.jpg',
											'https://picsum.photos/500/300?image=1',
											'https://picsum.photos/500/300?image=2',
											'https://picsum.photos/500/300?image=3',
										]}
									/>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* RELATED MEDIA BLOCK */}
				<SectionBackground bgColor="" className="related-media">
					<PageContainer>
						<Fade>
							<Section gridStart="760px">
								<Block flexBasis="100">
									<Paragraph padding="0">
										<H4 fontWeight="800" className="pt-5">
											Related media content
										</H4>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=0"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=1"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<RelateMedia>
													<Img
														src="https://picsum.photos/400/250?image=2"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</RelateMedia>
											</A>
										</Link>
									</Paragraph>
								</Block>
							</Section>
						</Fade>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

export default Solutions;
