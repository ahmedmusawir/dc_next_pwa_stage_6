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

class DataIntegrationPage extends Component {
	render() {
		return (
			<Layout
				title="Deep Cast - Data Integration"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_data-integration/data-integration-header.jpg">
					<PageContainer>
						<Section height="lg" className="product-hero">
							<Block flexBasis="50" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="600">
											Greater Collaboration Across Roles
										</H1>
										<H6 light>
											Some long subtitle text goes here. It would be a tagline
											that describes the value of the software. That describes
											the value of the software
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEMP PLACE HOLDER SECTION - Img Right */}
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

				{/* TEXT & IMAGE  SECTION 1 */}
				<SectionBackground bgColor="" className="special-text-image-section">
					<Section gridStart="680px">
						<Block
							flexBasis="50"
							className="home-video-text-block"
							bgColor="blue"
						>
							<Paragraph padding="3rem" className="pt-5 pb-5">
								<Fade>
									<H2 light fontWeight="600" grey>
										Some Title Here
									</H2>
									<H4 light>
										This is some short description that explains whta the
										product does. This is some short description that explains
										whta the product does
									</H4>
								</Fade>
							</Paragraph>
						</Block>
						<Block
							flexBasis="50"
							bgImgLink="https://picsum.photos/800/600/?image=3"
							className=""
						>
							<Img
								src="https://picsum.photos/800/600/?image=3"
								alt="deepcast"
								className="img-fluid w-100"
							/>
						</Block>
					</Section>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="" className="more-info-form-section">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">For more information</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements to get the latest product
										</H6>
										<Form>
											<FormGroup>
												<Input
													type="textarea"
													name="textarea"
													id="textarea-input"
													placeholder="Tell us what you want to know"
													className="form-control textarea-input"
													row="10"
												/>
											</FormGroup>
											<br />
											<FormGroup className="">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
													className="email-input"
												/>
											</FormGroup>
											<Button color="info" className="submit-btn ">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50" align="center">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_data-integration/data-integ-form-circle.jpg"
											alt=""
											className="img-fluid"
										/>
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

export default DataIntegrationPage;
