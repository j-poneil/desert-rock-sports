import React, { useState, useEffect, lazy, Suspense} from 'react';

import PlotlyWxRRChart from './PlotlyWxRRChart';
// import { BoltLoaderComponent } from './BoltLoader';
// const PlotlyWxRRChart = lazy(() => import('./PlotlyWxRRChart'));
// const PlotlyWx__Chart = lazy(() => import('./'));



/*
@ For now:
	It will show a spinner until the chart is ready to be shown

	Individual charts
		will lazy load
			Plotly js lib
		will lazy load or await
			w/e JSON, --OR-- API response stuff to get data
		return a plot -- to be lazy loaded into here
*/

function Wx() {
	// const [loading, setLoading] = useState(false);

	// const fetchData = async () => {
	// 	setLoading(true);
	// 	await fetch("/").then(() => {
	// 		// handle data
	// 	});
	// 	setLoading(false);
	// }
	
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
				<PlotlyWxRRChart />
				{/* <Suspense fallback={<BoltLoaderComponent />}>
					<PlotlyWx__Chart />
				</Suspense> */}
				{/* <Suspense fallback={<BoltLoaderComponent />}>
					<PlotlyWx__Chart />
				</Suspense> */}
			</div>
		</div>
	)
}

export default Wx;