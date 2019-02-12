import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import {
	H1,
	H2,
	Section,
	Block,
	Paragraph,
	SectionBackground,
	Slider,
} from 'components/general';
// import AtvImg from 'react-img-atv';

class TestPage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - TestPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section height="20rem">
							<Block flexflexBasis="100" className="text-center">
								<Paragraph>
									<H1 light>TestPage Template</H1>
								</Paragraph>
								{/* <AtvImg
									layers={[
										'http://kloc.pm/images/back.png',
										'/static/images/oil-rig.png',
									]}
									staticFallback="/static/images/oil-rig.png"
									isStatic={false}
									className={'thisIsOptional'}
									style={{ width: '90%', height: '90%' }}
								/> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEST CAROUSEL SECTION */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexBasis="50" className="text-center">
								<Paragraph>
									<H1 light>TESTNG CAROUSEL</H1>
								</Paragraph>
							</Block>
							<Block flexBasis="50" className="text-center">
								<Paragraph>
									<Slider
										emulateTouch={true}
										showArrows={false}
										width="80%"
										showThumbs={false}
									/>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

export default TestPage;
