import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	A,
	P,
	Img,
	Video,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Button,
	Input,
	SectionBackground,
} from 'components/general';

class HomePage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* HOME HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_home/home-hero-1600.jpg">
					<PageContainer>
						<Section height="lg" className="home-hero">
							<Block flexBasis="40" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="800">
											STREAMLINE YOUR OPERATION
										</H1>
										<H6 light>
											Lorem ipsum dolor sit amet consec, sicing elit. Lorem
											ipsum dolor sit amet cons, adipisicing elit.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" className="hero-block-2">
								{/* <Img
									src="/static/images/oil-rig.png"
									alt=""
									className="img-fluid"
								/> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TOP TEXT & VIDEO SECTION */}
				<SectionBackground bgColor="" className="home-video-section">
					<Section gridStart="1300px">
						<Block flexBasis="40" className="home-video-text-block">
							<Paragraph padding="3rem" className="pt-5 pb-5">
								<Fade>
									<H4 fontWeight="600">
										Simplify and Automate Through Innovations in Physics and AI
									</H4>
									<H6>
										To help the industrial sector thrive through the application
										of data-driven processes and cutting-edge AI application of
										data-driven processes and cutting-edge AI technologies.
									</H6>
									<H6>
										To help the industrial sector thrive through the application
										of data-driven processes and cutting-edge AI application of
										data-driven processes and cutting-edge AI technologies.
									</H6>
								</Fade>
							</Paragraph>
						</Block>
						<Block
							flexBasis="60"
							bgColor="light"
							className="pt-5 pb-5 home-video-block"
						>
							<Block>
								<Video
									mp4Src="/static/videos/ai-vid.mp4"
									webmSrc=""
									posterSrc="/static/images/_home/home-video-cover.jpg"
								/>
							</Block>
						</Block>
					</Section>
				</SectionBackground>

				{/* DUEL TEXT & IMG SECTION */}

				<SectionBackground
					bgColor="grey"
					className="pt-5 pb-5 home-exploration-section"
				>
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="70" className="text-center" align="flex-end">
								<Paragraph>
									<H4 fontWeight="600">
										Message related to how the company works knowing there are
										two main scopes
									</H4>
								</Paragraph>
							</Block>
							<Block flexBasis="50" className="text-center" direction="column">
								<Paragraph padding="4rem">
									<Fade>
										<H4 fontWeight="600">Exploration</H4>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
										</H6>
									</Fade>
								</Paragraph>
								<Paragraph>
									<Fade>
										<Img
											src="/static/images/_home/home-exploration-450x300.jpg"
											alt=""
											className="img-fluid"
										/>
									</Fade>
								</Paragraph>
							</Block>

							<Block flexBasis="50" className="text-center" direction="column">
								<Paragraph padding="4rem">
									<Fade>
										<H4 fontWeight="600">Production</H4>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
											Molestias dolores quia sit harum accusamus quaerat
										</H6>
									</Fade>
								</Paragraph>
								<Paragraph>
									<Fade>
										<Img
											src="/static/images/_home/home-production-450x300.jpg"
											alt=""
											className="img-fluid"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* PARTNER LOGO SECTION */}
				<SectionBackground bgColor="" className="home-partners-section pb-5">
					{/* <PageContainer> */}
					<Section gridStart="300px" height="10rem">
						<Block flexBasis="100" className="headline-block">
							<Paragraph>
								<H4 fontWeight="800" className="text-center mt-5">
									We Strive for Cutting-Edge Solutions Through our Strategic
									High-Tech Partnerships
								</H4>
							</Paragraph>
						</Block>
					</Section>
					<Section gridStart="300px" height="10rem" className="pr-5 pl-5">
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-1.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-2.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-3.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-4.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-5.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-1.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-2.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-3.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
					</Section>
					{/* </PageContainer> */}
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="" className="general-subscription-section">
					<PageContainer>
						<Section gridStart="769px">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">More to Come!</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements
										</H6>
										<Form inline>
											<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
												/>
											</FormGroup>
											<Button color="info" className="submit-btn">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_home/home-subscription-350x250.png"
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
export default HomePage;
