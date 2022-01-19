import React, {useState} from 'react';
import { Card, Image } from 'semantic-ui-react';
import Heart from 'react-heart';
import '../App.css';

const ResultsCard = (props) => {
	const [active, setActive] = useState(false);

	return (
		<Card className="nasa-article" key={props.item.data[0].nasa_id}>
			<Image src={props.item.links?.[0].href} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{props.item.data[0].title}</Card.Header>
				<Card.Meta>
					<span className="date">
						Created: {props.item.data[0].date_created}
					</span>
				</Card.Meta>
				<Card.Description>
					Description: {props.item.data[0].description}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
					<Heart className='heart' isActive={active} onClick={() => setActive(!active)} />
			</Card.Content>
		</Card>
	);
};

export default ResultsCard;
