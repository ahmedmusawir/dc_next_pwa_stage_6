import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Jello from 'react-reveal/Jello';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
	Layout,
	PageContent,
	ContentSection,
	GridSection,
} from 'components/layout';
import {
	H2,
	A,
	Img,
	GridBlock,
	GridImageBlock,
	HomeHeroBlock,
	Container,
} from 'components/general';
import data from 'static/constants/dcData';

class Home extends React.Component {
	static getInitialProps = async () => {
		const homeData = data.page.home;

		return {
			homePageData: homeData,
		};
	};

	getSections = () => {
		const articles = [];
		this.props.homePageData.sections.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		return (
			<Layout
				title="Deep Cast - Home"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<ContentSection nopadding bgColor="dark">
					<GridSection>
						<GridBlock nopadding>
							<Fade>
								<HomeHeroBlock
									theme="dark"
									title="We Simplify Operations"
									subtitle="Through Innovations in Physics and AI"
								/>
							</Fade>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection>
					<Container>
						<GridSection>
							<GridBlock>
								<H2 className="text-center">
									Many Businesses Struggle to Take Full Advantage of Their Data
									...
								</H2>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<Fade>
									<GridImageBlock
										imageLink="/static/images/before.png"
										caption="Our goal is to automate manual tasks and streamline your data pipeline so you can focus on business critical decisions."
										details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
									/>
								</Fade>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<Fade>
									<GridImageBlock
										imageLink="/static/images/after.png"
										caption="↑ Data Usage	↓ Analysis Time	↑ Accuracy"
										details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
									/>
								</Fade>
							</GridBlock>
						</GridSection>
					</Container>
				</ContentSection>
				<ContentSection bgColor="dark">
					<Container>
						<GridSection>
							<GridBlock>
								<H2 light className="text-center">
									We Offer an Integrated Platform With Modules Tailored for The
									Oil and Gas Industry
								</H2>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<H2 light weight="700" className="text-center">
									Field Evaluation
								</H2>
								<Fade>
									<GridImageBlock
										theme="dark"
										imageLink="/static/images/field.png"
										caption=""
										details="Our Forecaster Module allows customers to accurately forecast more than 2700 horizontal wells at Permian Basin in less than 1 hour. Each well is associated with a rigorous estimation of uncertainty, thus provide deeper insights into expected investment returns and risks."
									/>
								</Fade>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<H2 light weight="700" className="text-center">
									Real-Time Predictor
								</H2>
								<Fade>
									<GridImageBlock
										theme="dark"
										imageLink="/static/images/realtime.png"
										caption="↑ Data Usage	↓ Analysis Time	↑ Accuracy"
										details="Our Streamer Module helps reduce discrepancies between data sources, and provides a mechanism to monitor and predict issues days in advance. Advanced data-physics models coupled with an intuitive UI in Spotfire and mobile devices help operators cut 10% in operating expenses per well, and increase collaboration across teams."
									/>
								</Fade>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<H2 light weight="700" className="text-center">
									Infill Predictions
								</H2>
								<Fade>
									<GridImageBlock
										theme="dark"
										imageLink="/static/images/infill.png"
										caption="↑ Data Usage	↓ Analysis Time	↑ Accuracy"
										details="Our Predictor Modules captures the essence of geological, reservoir, production, and completion data and exposes the strongest production drivers, predicts the production and pressure of prospect wells, and recommends locations and well-spacing. A team of geoscientists and engineers can be more effective at planning optimal infill strategies and completion designs."
									/>
								</Fade>
							</GridBlock>
						</GridSection>
					</Container>
				</ContentSection>
				<ContentSection>
					<Container>
						<GridSection>
							<GridBlock>
								<H2 className="text-center">
									We Strive for Cutting-Edge Solutions Through our Strategic
									High-Tech Partnerships
								</H2>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock nopadding size="xs">
								<Jello>
									<A>
										<Img
											src="/static/images/partner-logo-1.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Jello>
							</GridBlock>
							<GridBlock nopadding size="xs">
								<Jello>
									<A>
										<Img
											src="/static/images/partner-logo-2.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Jello>
							</GridBlock>
							<GridBlock nopadding size="xs">
								<Jello>
									<A>
										<Img
											src="/static/images/partner-logo-3.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Jello>
							</GridBlock>
							<GridBlock nopadding size="xs">
								<Jello>
									<A>
										<Img
											src="/static/images/partner-logo-4.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Jello>
							</GridBlock>
							<GridBlock nopadding size="xs">
								<Jello>
									<A>
										<Img
											src="/static/images/partner-logo-5.jpg"
											alt="Partner Logo"
										/>
									</A>
								</Jello>
							</GridBlock>
						</GridSection>
					</Container>
				</ContentSection>
				<ContentSection bgColor="grey">
					<Container>
						<GridSection>
							<GridBlock>
								<H2 className="text-center">Contact Us For A Live Demo</H2>
							</GridBlock>
						</GridSection>
						<GridSection>
							<GridBlock>
								<Zoom>
									<Form>
										<FormGroup>
											<Label for="exampleEmail">Email:</Label>
											<Input
												type="email"
												name="email"
												id="exampleEmail"
												placeholder="Please enter your email"
											/>
										</FormGroup>

										<FormGroup>
											<Label for="exampleText">Message:</Label>
											<Input
												type="textarea"
												name="text"
												id="exampleText"
												rows="8"
												placeholder="Your Message"
											/>
										</FormGroup>

										<Button color="danger">Submit</Button>
									</Form>
								</Zoom>
							</GridBlock>
						</GridSection>
					</Container>
				</ContentSection>
			</Layout>
		);
	}
}
export default Home;
