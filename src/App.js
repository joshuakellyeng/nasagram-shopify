import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import NasagramHeader from './components/NasagramHeader';
import ResultsCard from './components/ResultsCard';
import { Segment, Input, Button } from 'semantic-ui-react';
import './App.css';

function App() {
	const [userInput, setUserInput] = useState('');
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		// console.log('handling change', e.target.value)
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		// Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
		axios
			.get(`https://images-api.nasa.gov/search?q=${userInput}`)
			.then((response) => setData(response.data.collection.items))
			.catch((err) => console.error(err));
	};
	return (
		<div className="App">
			<div className="banner">
				<NasagramHeader author={'Josh K.'} />
			</div>
			<Segment basic>
				<Input
					label={'Search'}
					placeholder={'Reach For The Stars!'}
					value={userInput}
					onChange={handleChange}
				/>
				<Button primary onClick={handleSubmit}>
					Submit
				</Button>
			</Segment>
			<Segment id="nasa-container">
				{data.map((item) => {
					return <ResultsCard key={item.data[0].nasa_id} item={item} />;
				})}
			</Segment>
		</div>
	);
}

export default App;
