import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';

const NasagramHeader = ({ author }) => {
	return (
		<Segment basic inverted padded="very" vertical>
			<Header className="h1" as="h1">
				NASAGRAM
			</Header>
			<Image src={'nasagram.png'} size={'medium'} centered />
			<Header as="h3">Author: <a href='https://github.com/joshuakellyeng'>{author}</a></Header>
			<p>
				Made with <a href="https://react.semantic-ui.com/">Semantic UI React</a>
			</p>
		</Segment>
	);
};

export default NasagramHeader;
