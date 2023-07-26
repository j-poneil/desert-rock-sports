import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { BoltLoaderComponent } from './BoltLoader';

const fakeData = lazy(() => import('../data/tempWxTestData'));

//! In the future, consider making a custom dist with just the required chart types
//!!! -- 3.6MB
// import Plotly from 'plotly.js-dist-min';
import Plot from 'react-plotly.js';

const PlotlyWxRRChart = () => {
	const [wxData, setWxData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const RRKN2 = 'RRKN2';

		fetch(`/getwx/${RRKN2}/mostuseful`, { signal })
			.then((res) => res.json())
			.then((data) => {
				setWxData(data);
				setLoading(false);
			}).catch(err => {
				if(err.name = "AbortError"){
					console.log("cancelled!");
				} else {
					//todo
				}
			})

		return () => {
			controller.abort();
		}
	},[]);


	//  # The shape of the returned data... which will end up saved in a const in javascript/react
	// 	# {
	// 	#	'id': 'RRKN2',
	// 	#	'daily': 
	// 	#		[{row}],
	// 	#	'hourly':
	// 	#		[{row}, {row}, ... {row}]
	// 	# }
	// 	# row content:
	// 	# { 'datetime': '2023-07-25 00:00:00', 'name': 'RRKN2', ... }

	// daily cols
	// 'datetime', 'name', 'tempmax', 'tempmin', 'temp', 'feelslikemax', 'feelslikemin', 'feelslike', 'humidity', 'precip', 'precipprob', 'precipcover', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'cloudcover', 'visibility', 'sunrise', 'sunset', 'moonphase', 'conditions', 'description', 'icon', 'source'
	// hourly cols
	// 'datetime', 'name', 'temp', 'feelslike', 'humidity', 'precip', 'precipprob', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'visibility', 'cloudcover', 'conditions', 'icon', 'source'

	//! This is nice and all... but surely, there must be a more concise way to write it.

	//@ Name
	const fakeName = fakeData['name'];
	
	//@ Daily
	const fakeTimeDailyX = fakeData['daily'].map(hour => hour['datetime']);

	const fakeTempMaxDailyY = fakeData['daily'].map(hour => hour['tempmax']);
	const fakeTempMinDailyY = fakeData['daily'].map(hour => hour['tempmin']);
	const fakeTempDailyY = fakeData['daily'].map(hour => hour['temp']);
	const  = fakeData['daily'].map(hour => hour['feelslikemax']);
	const  = fakeData['daily'].map(hour => hour['feelslikemin']);
	const  = fakeData['daily'].map(hour => hour['feelslike']);
	const  = fakeData['daily'].map(hour => hour['humidity']);
	const  = fakeData['daily'].map(hour => hour['precip']);
	const  = fakeData['daily'].map(hour => hour['precipprob']);
	const  = fakeData['daily'].map(hour => hour['precipcover']);
	const  = fakeData['daily'].map(hour => hour['preciptype']);
	const  = fakeData['daily'].map(hour => hour['windgust']);
	const  = fakeData['daily'].map(hour => hour['windspeed']);
	const  = fakeData['daily'].map(hour => hour['winddir']);
	const  = fakeData['daily'].map(hour => hour['pressure']);
	const  = fakeData['daily'].map(hour => hour['cloudcover']);
	const  = fakeData['daily'].map(hour => hour['visibility']);
	const  = fakeData['daily'].map(hour => hour['sunrise']);
	const  = fakeData['daily'].map(hour => hour['sunset']);
	const  = fakeData['daily'].map(hour => hour['moonphase']);
	const  = fakeData['daily'].map(hour => hour['conditions']);
	const  = fakeData['daily'].map(hour => hour['description']);
	const  = fakeData['daily'].map(hour => hour['icon']);
	const  = fakeData['daily'].map(hour => hour['source']);


	//@ Hourly
	const fakeTimeHourlyX = fakeData['hourly'].map(hour => hour['datetime']);

	const fakeTempHourlyY = fakeData['hourly'].map(hour => hour['temp']);
	const fakeFeelsLikeHourlyY = fakeData['hourly'].map(hour => hour['feelslike']);
	const fakeHumidityHourlyY = fakeData['hourly'].map(hour => hour['humidity']);
	const fakePrecipHourlyY = fakeData['hourly'].map(hour => hour['precip']);
	const fakePrecipProbHourlyY = fakeData['hourly'].map(hour => hour['precipprob']);
	const fakePrecipTypeHourlyY = fakeData['hourly'].map(hour => hour['preciptype']);
	const fakeWindGustHourlyY = fakeData['hourly'].map(hour => hour['windgust']);
	const fakeWindSpeedHourlyY = fakeData['hourly'].map(hour => hour['windspeed']);
	const fakeWindDirHourlyY = fakeData['hourly'].map(hour => hour['winddir']);
	const fakePressureHourlyY = fakeData['hourly'].map(hour => hour['pressure']);
	const fakeVisibilityHourlyY = fakeData['hourly'].map(hour => hour['visibility']);
	const fakeCloudCoverHourlyY = fakeData['hourly'].map(hour => hour['cloudcover']);
	const fakeConditionsHourlyY = fakeData['hourly'].map(hour => hour['conditions']);
	const fakeIconHourlyY = fakeData['hourly'].map(hour => hour['icon']);
	const fakeSourceHourlyY = fakeData['hourly'].map(hour => hour['source']);
	


	return (
		<Suspense fallback={<BoltLoaderComponent />}>
			{/* { wxData } */}
			<Plot
				data={
					[
						{
							x: [...fakeTimeHourlyX],
							y: [...fakeTempHourlyY],
							type: 'scatter',
							mode: 'lines+markers',
							marker: {color: 'red'}
						},
						{
							x: [...fakeTimeHourlyX],
							y: [...fakeFeelsLikeHourlyY],
							type: 'scatter',
							mode: 'lines+markers',
							marker: {color: 'blue'}
						}
					]
				}
				layout={
					{
						width: 320,
						height: 240,
						title: 'title'
					}
				}
			/>
		</Suspense>
	)
}

export default PlotlyWxRRChart;