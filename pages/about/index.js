import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PageContainer } from 'components/layout';
import { UncontrolledTooltip } from 'reactstrap';
import Fade from 'react-reveal/Fade';
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
	Card,
	Box,
	Section,
	Block,
	Small,
	Paragraph,
	SectionBackground,
	Slider,
	Form,
	FormGroup,
	Button,
	Input,
} from 'components/general';
import { Label, FormText } from 'reactstrap';

class AboutPage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - AboutPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TEAM HERO SLIDER BLOCK */}
				<SectionBackground bgColor="light" className="about-hero-section">
					<Section gridStart="1350px" height="lg">
						<Block flexBasis="40">
							<Paragraph padding="4rem" className="about-hero-text">
								<Fade>
									<H1 fontWeight="800" info>
										More than 30 years of shared experience for the best results
									</H1>
									<H6 italic>
										Our results are reflected on our customers opinions Lorem
										ipsum dolor sit amet consectetur adipisicing elit. Quam
										expedita facilis similique sapiente veritatis exercitationem
										quae amet debitis itaque assumenda ad atque
									</H6>
									<H6 italic>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Molestias dolores quia sit harum accusamus quaerat
									</H6>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="60">
							<Slider
								className="about-hero-slider"
								autoPlay
								infiniteLoop={true}
								showStatus={false}
								emulateTouch={true}
								showArrows={false}
								width="100%"
								showThumbs={false}
								imgLinks={[
									'https://picsum.photos/500/250?image=1048',
									'https://picsum.photos/500/250?image=1033',
									'https://picsum.photos/500/250?image=1031',
									'https://picsum.photos/500/250?image=1032',
								]}
							/>
						</Block>
					</Section>
				</SectionBackground>

				{/* TEAM MEMBER SECION 1 */}
				<SectionBackground bgColor="" className="about-team-section pt-5 pb-5">
					<PageContainer>
						<Section center gridStart="300px">
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Core Team
									</H3>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Hector Klie</H6>
												<P>
													<small> CEO, Lead Data Scientist</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus1"
												/>
												<UncontrolledTooltip placement="bottom" target="plus1">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Arturo Klie</H6>
												<P>
													<small> CTO, Sr. Software Engineer</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus2"
												/>
												<UncontrolledTooltip placement="bottom" target="plus2">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/klieart/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Le</H6>
												<P>
													<small>
														{' '}
														Sr. Reservoir Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus3"
												/>
												<UncontrolledTooltip placement="bottom" target="plus3">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/duchuule/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Vuong</H6>
												<P>
													<small>
														{' '}
														Sr. Petroleum Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus4"
												/>
												<UncontrolledTooltip placement="bottom" target="plus4">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A href="!#" target="_blank">
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Wei Ma</H6>
												<P>
													<small> Sr. Petroleum Engineer, Data Scientist</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus5"
												/>
												<UncontrolledTooltip placement="bottom" target="plus5">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/wei-ma-1b01b541/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEAM MEMBER SECION 2 */}
				<SectionBackground bgColor="" className="about-team-section pt-5 pb-5">
					<PageContainer>
						<Section center gridStart="300px">
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Advisors
									</H3>
								</Paragraph>
							</Block>

							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Yves Chevalier</H6>
												<P>
													<small> Exploration Geosciences Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus6"
												/>
												<UncontrolledTooltip placement="bottom" target="plus6">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/yves-m-r-chevalier-1b915451/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Tan Nguyen</H6>
												<P>
													<small>
														{' '}
														Drilling and Production Engineer Expert
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus7"
												/>
												<UncontrolledTooltip placement="bottom" target="plus7">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/tan-nguyen-031b8596/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Reinaldo Gonzalez</H6>
												<P>
													<small> Geomodeling and Risk Analysis Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus8"
												/>
												<UncontrolledTooltip placement="bottom" target="plus8">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/gonzalezreinaldo/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Horacio Florez</H6>
												<P>
													<small>
														{' '}
														Computational Scientist and Geomechanics Expert
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus9"
												/>
												<UncontrolledTooltip placement="bottom" target="plus9">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/horacio-florez-87b37b24/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/about-member-img.jpg"
										padding="0"
									>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Mick Fetkovich</H6>
												<P>
													<small> Petroleum Engineer Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus10"
												/>
												<UncontrolledTooltip placement="bottom" target="plus10">
													30 years of experience
												</UncontrolledTooltip>
												<Img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
												<Img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
												/>
											</Div>
											{/* <A
												href="https://www.linkedin.com/in/mick-fetkovich-90013235/"
												target="_blank"
											>
												<Img
													src="static/images/linkedin-dark.png"
													alt="LinkedIn"
													className="linkedin-icon"
												/>
											</A> */}
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="" className="about-join-us-section">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">Join our team</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements to get the latest product
										</H6>
										<Form>
											<FormGroup>
												<Label for="file-input" className="file-input-label">
													Attach CV
													<Input
														type="file"
														name="file"
														id="file-input"
														className="file-input"
													/>
												</Label>
											</FormGroup>
											<FormGroup>
												<Input
													type="textarea"
													name="textarea"
													id="textarea-input"
													placeholder="Tell us why you would like to join DeepCast"
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
							<Block flexBasis="50" align="flex-end">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_about/about-join-us-360x360.jpg"
											alt=""
											className="img-fluid"
										/>
									</Fade>
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
										<H4 grey fontWeight="600" className="pt-5">
											Explore media content
										</H4>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
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
												</Div>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
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
												</Div>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
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
												</Div>
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
export default AboutPage;
