import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {
	Layout,
	HeaderTooltipBox,
	PageContainer,
	ChartWithInputRange,
} from 'components/layout';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	Img,
	Button,
	Box,
	Card,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Input,
	Chart,
	SectionBackground,
} from 'components/general';

class Product extends Component {
	render() {
		return (
			<Layout
				title="Deep Cast - AboutPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_product/product-header.jpg">
					<PageContainer>
						<Section height="lg" className="product-hero">
							<Block flexBasis="40" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="800">
											Expedite Field Analysis by 100x
										</H1>
										<H6 light>
											Some long subtitle text goes here. It would be a tagline
											that describes the value of the software. That describes
											the value of the software
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" className="hero-block-2">
								{/* <HeaderTooltipBox>
									<Fade>
										<H4 bold className="text-center mb-3">
											API: 1234567890
										</H4>
										<P>Some Information</P>
										<P>More Information</P>
										<P>Some Extra Information</P>
										<P>Last set of Information</P>
									</Fade>
								</HeaderTooltipBox> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & IMAGE BLOCK 1 */}
				<SectionBackground className="pt-5 pb-5" bgColor="light">
					<PageContainer>
						<Section gridStart="800px">
							<Block flexBasis="33" direction="column">
								<Paragraph>
									<Fade>
										<Chart type="line" />
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="800">Automatic Forecasting</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" direction="column">
								<Paragraph nopadding>
									<Fade>
										<Chart type="pie" />
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="800">Quick Reservoir Insights</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" direction="column">
								<Paragraph>
									<Fade>
										<Chart type="bar" />
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="800">Automatic Forecasting</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & IMAGE BLOCK 2 - Img Right */}
				<SectionBackground bgColor="" className="pt-5 pb-5">
					<PageContainer>
						<Section>
							<Block flexBasis="40">
								<Paragraph>
									<Fade>
										<H4 fontWeight="800">
											Getting the right information saves valuable time and
											effort
										</H4>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae. Lorem ipsum dolor, sit amet consectetur
											adipisicing elit. Molestias dolores quia sit harum
											accusamus quaerat repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60">
								<Fade>
									<Img
										src="/static/images/_product/product-text-block-img.jpg"
										alt="Deep Cast"
										className="img-fluid"
									/>
								</Fade>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* PRICING BLOCK  */}

				<SectionBackground
					bgColor="lightblue"
					className="product-price-block pb-5"
				>
					<PageContainer>
						<Block flexBasis="100">
							<Paragraph>
								<H3 fontWeight="800" className="text-center pt-5">
									Meet our work plans
								</H3>
							</Paragraph>
						</Block>
						<Section>
							<Block flexBasis="50" className="text-center" align="stretch">
								<Paragraph>
									<Card
										imgSrc="/static/images/_product/product-circle-check.png"
										className="pt-5"
										icon
									>
										<Fade bottom cascade>
											<H3 fontWeight="800" className="mt-5">
												Starter
											</H3>
											<P>
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Placeat distinctio voluptates enim Lorem ipsum,
												dolor sit amet consect sicing elit. Placeat distinctio
												voluptates enim
											</P>

											<Box className="features" minHeight="12rem">
												<H6>First Feature</H6>
												<H6>Second Feature</H6>
												<H6>The Third Feature is Cool!</H6>
											</Box>
											<Button className="btn btn-danger btn-lg mt-5">
												$100
											</Button>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="50" className="text-center" align="stretch">
								<Paragraph>
									<Card
										imgSrc="/static/images/_product/product-enterprise-case.png"
										className="pt-5"
										icon
									>
										<Fade bottom cascade>
											<H3 fontWeight="800" className="mt-5">
												Enterprise
											</H3>
											<P>
												Lorem ipsum, dolor sit amet consectetur adipisicing
												elit. Placeat distinctio voluptates enim Lorem ipsum,
												dolor sit amet consect sicing elit. Placeat distinctio
												voluptates enim
											</P>
											<Box className="features" minHeight="12rem">
												<H6>First Feature</H6>
												<H6>Second Feature</H6>
												<H6>The Third Feature is Cool!</H6>
												<H6>The Third Feature 4</H6>
											</Box>
											<Button className="btn btn-danger btn-lg mt-5">
												Contact Us
											</Button>
										</Fade>
									</Card>
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
									<Fade bottom cascade>
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

export default Product;
