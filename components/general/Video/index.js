/**
 *
 * <Video />
 *
 * A Video Container with Props
 * Props: fluid etc.
 */
import React, { Component } from 'react';

export class Video extends Component {
	render() {
		const { posterSrc, mp4Src, webmSrc } = this.props;

		return (
			<video
				ref="video"
				width="100%"
				controls
				poster={posterSrc}
				onClick={() => this.refs.video.play()}
			>
				<source src={mp4Src} type="video/mp4" />
				<source src={webmSrc} type="video/webm" />
				{/* <source src="/static/videos/ai-vid.webm" type="video/webm" /> */}
			</video>
		);
	}
}

export default Video;
