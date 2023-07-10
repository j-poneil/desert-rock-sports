import React, { useState, useEffect } from 'react';

import { BoltLoaderComponent } from './BoltLoader';

/*
A lot of this is just ideas taken from elsewhere, and not necissarily appropriate to my MySQL DB situation
... but it should help spur my thought process

? Especially... how do I want to split this stuff up into different components?
? Where do I want to query the DB from, handle the data, display data, return graph to?
*/

function Wx() {
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		await fetch("/").then(() => {
			// handle data
		});
		setLoading(false);
	}

	const WxGraph = () => {
		return (
			<>
			</>
		)
	}
	
	return (
		<div>
			{/* https://css-tricks.com/centering-css-complete-guide/ */}
			{/* Centering vertically & horizontally using flexbox */}
			{/* So useful... should probably be a className shortcut in react-bootstrap... if there isn't already */}
			{/*//@ As is, centering will ultimately apply to the WxGraph for better or worse unless I change this up */}
			<div
				style={{
					"display": "flex",
					"justifyContent": "center",
					"alignItems": "center"
				}}
			>
				<BoltLoaderComponent />
				{/* { loading ? <BoltLoaderComponent /> : <WxGraph /> } */}
			</div>
		</div>
	)
}

export default Wx;