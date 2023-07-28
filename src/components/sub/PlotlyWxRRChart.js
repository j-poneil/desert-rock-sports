import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { BoltLoaderComponent } from './BoltLoader';
//! In the future, consider making a custom dist with just the required chart types
//!!! -- 3.6MB
// import Plotly from 'plotly.js-dist-min';
import Plot from 'react-plotly.js';

// const fakeData = lazy(() => import('../data/tempWxTestData'))
import {data as fakeData} from '../data/tempWxTestData';

//! Hook up a good way for this to work after figure out connection to live data, autoupdate
//! Set to false to use live data from DB
const useFakeStaticData = true;


const PlotlyWxRRChart = () => {
	// this is a good way to asynchonously load a data file...
	// const [fakeData, setFakeData] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const importedData = await import('../data/tempWxTestData.js');
	// 			// .data here refers to the name of the exported variable (object) in the tempWxTestData.js
	// 			setFakeData(importedData.data);
	// 		} catch (error) {
	// 			console.error('Error fetching fake data: ', error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);


	// const [wxData, setWxData] = useState(null);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const controller = new AbortController();
	// 	const signal = controller.signal;
	// 	const RRKN2 = 'RRKN2';

	// 	fetch(`/getwx/${RRKN2}/mostuseful`, { signal })
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setWxData(data);
	// 			setLoading(false);
	// 		}).catch(err => {
	// 			if(err.name = "AbortError"){
	// 				console.log("cancelled!");
	// 			} else {
	// 				//! todo
	// 			}
	// 		})

	// 	return () => {
	// 		controller.abort();
	// 	}
	// },[]);


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

	const arrayedData = {};

	// no real checks in this
	// ex. saveValsAsArray(fakeData, 'hourly', 'datetime', 'x'); 
	function saveValsAsArray(dataSet, table, key, ax){
		let axis = ax == 'x' ? 'x' : 'y';

		//! consider making it so that for the daily data, it saves it w/o it inside an array
		//! ... for daily I will display or graph differently than the hourly data
		//? ... or will I? hmm...
		//! change fake_ to something else when used w/ real data
		arrayedData[`fake_${table}_${key}_${axis}`] = dataSet[table].map(hour => hour[key]);
		// console.log(`arrayedData['fake_${table}_${key}_${axis}'] now exists...`);
		// prints out all, both daily and hourly, x and y axis
		// console.log(Object.keys(arrayedData)); // ['fake_hourly_datetime_x', 'fake_hourly_temp_y', ... ]
	}

	// Could re-write these so they are grabbed from the imported (or returned) data, not hard coded
	const dailyCols = ['datetime', 'name', 'tempmax', 'tempmin', 'temp', 'feelslikemax', 'feelslikemin', 'feelslike', 'humidity', 'precip', 'precipprob', 'precipcover', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'cloudcover', 'visibility', 'sunrise', 'sunset', 'moonphase', 'conditions', 'description', 'icon', 'source'];
	const hourlyCols = ['datetime', 'name', 'temp', 'feelslike', 'humidity', 'precip', 'precipprob', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'visibility', 'cloudcover', 'conditions', 'icon', 'source'];

	const fakeName = fakeData['id'];
	// makes nice arrays stored as key: val in arrayedData object
	// datetime is x, all other keys are y
	dailyCols.forEach((key, i) => {
		if (i == 0){
			saveValsAsArray(fakeData, 'daily', key, 'x');
			return;
		} else if (key == 'name'){
			return;
		}
		saveValsAsArray(fakeData, 'daily', key, 'y');
	});

	hourlyCols.forEach((key, i) => {
		if (i == 0){
			saveValsAsArray(fakeData, 'hourly', key, 'x');
			return;
		} else if (key == 'name'){
			return;
		}
		saveValsAsArray(fakeData, 'hourly', key, 'y');
	});
	
	console.log('saved keys for arrayedData (ignore index, arrayedData itself is an object, but listing the keys of it puts them in an array... hence the index):');
	console.log(Object.keys(arrayedData)); // ['fake_hourly_datetime_x', 'fake_hourly_temp_y', ... ]

	//! cool idea
	// forEach / map to generate plot data objects w/ x, y, type, mode, marker... titles corresponding, colors changing automatically, etc...
	// need to get more background data so can auto build appropriate data objects

	//! Also make sure that other non-graphed data is available...
	// like probably timezone, lat/lon, ...?
	// overall this means making sure I do indeed get such data back from SQL query (bottle server api endpoint)

	//! cool stretch idea
	// inhabitable temp/humidity warnings?
	// how would I do this?
	//	If humidity constant, x degrees higher is inhabitable zone
	//	If temp constant, x % higher humidity is inhabitable zone
	// warning: close to inhabitable zone?

	//? how to display daily data, and general station data?

	/*
	hourly
		_hourly_datetime_x
		_hourly_temp_y
		_hourly_feelslike_y
		_hourly_humidity_y (% so need 2nd Y axis)
		_hourly_precip_y (inches, so need 3rd Y axis)
		_hourly_precipprob_y (%?, so need to be on 2nd Y axis)
		_hourly_windspeed_y (speed, so need to be on 4th Y axis)
		_hourly_windgust_y (speed, so need to be on 4th Y axis)
		_hourly_pressure_y (mb, so need to be on 5th Y axis)
		_hourly_cloudcover_y (%?, so need to be on 2nd Y axis)

		how to show?
		_hourly_preciptype_y
		_hourly_winddir_y
		_hourly_visibility_y
		_hourly_conditions_y ('clear' etc...)
		_hourly_icon_y ('icon-name')
		_hourly_source_y ('fcst' vs 'obs')
	*/
	// for 'fcst' data, dotted lines would be cool, solid where its 'obs'
	// or a overlayed shade for 'fcst'

	//* axes in js
	// https://plotly.com/javascript/axes/
	// GREAT example of multiple Y axis:
	// https://codepen.io/plotly/pen/OVqZEO
	//		by setting xaxis:
	//			domain: [0.2, 0.8],
	//		and yaxis2:
	//			position: something < 0.2 or > 0.8
	// ... you can make it work... but it doesn't handle different screen sizes and resizing well. Hmm
	// so 2 - y axes is the limit w/o compromising responsive behaviour
	// under layout, hovermode: 'x' is great. Like that more than hover over individual data points.
	// summary data:
	// https://www.visualcrossing.com/resources/documentation/weather-data/how-to-use-historical-weather-data-to-forecast-the-weather-for-any-day-of-the-year/
	// ... really cool, potentially useable in some form

	return (
		<>
			<Suspense fallback={<BoltLoaderComponent />}>
				{/* { wxData } */}
				<Plot
					data={
						[
							{
								name: 'temp',
								x: [...arrayedData['fake_hourly_datetime_x']],
								y: [...arrayedData['fake_hourly_temp_y']],
								type: 'scatter', // scatter
								mode: 'lines', // lines+markers, markers
								line: { // or markers: if using that
									color: 'red'
								},
								legendgroup: 'temp'
							},
							{
								name: 'feelslike',
								x: [...arrayedData['fake_hourly_datetime_x']],
								y: [...arrayedData['fake_hourly_feelslike_y']],
								type: 'scatter',
								mode: 'lines',
								line: {
									color: 'pink'
								},
								legendgroup: 'temp'
							},
							{
								name: 'humidity',
								x: [...arrayedData['fake_hourly_datetime_x']],
								y: [...arrayedData['fake_hourly_humidity_y']],
								type: 'scatter',
								mode: 'lines',
								line: {
									color: '#1f77b4'
								},
								yaxis: 'y2',
								legendgroup: 'percent'
							}
						]
					}
					layout={
						{
							title: 'RRCNCA (ID: RRKN2)',
							hovermode: 'x',
							// to position legend inside the plot
							// or comment out to keep outside
							legend: {
								x: 1,
								xanchor: 'right',
								y: 1 // if this was 0.5, it would be middle right instead of top right
							},
							// titlefont: {
							// 	size: 18,
							// 	family: 'Arial, sans-serif',
							// 	color: 'lightgrey'
							// },
							// showticklabels: true,
							// tickangle: 'auto',
							// tickfont: {
							// 	size: 14,
							// 	family: 'Old Standard TT, serif',
							// 	color: 'black'
							// },
							xaxis: {
								title: 'hourly (PDT 24H)',
								titlefont: {
									size: 18,
									family: 'Arial, sans-serif',
									color: 'black'
								},
								autorange: true,
								// domain: [0.2, 0.8],
								// type: 'date', // seems like very little difference w/ or w/o specified
								// ticks: '',
								// showticklabels: true,
								// tickangle: 45,
								// tickfont: {
								// 	size: 14,
								// 	family: 'Arial, sans-serif',
								// 	color: 'black'
								// }
								// showgrid: true,
								// zeroline: true,
								// showline: true,
								// gridcolor: '#bdbdbd',
								// zerolinecolor: '#969696',
								// zerolinewidth: 4,
								// linecolor: '#636363',
								// linewidth: 6
							},
							yaxis: {
								title: 'temp F',
								titlefont: {
									size: 18,
									family: 'Arial, sans-serif',
									color: 'black'
								},
								autorange: true
							},
							yaxis2: {
								overlaying: 'y',
								// anchor: 'free',
								side: 'right',
								title: 'humidity %',
								titlefont: {
									size: 18,
									family: 'Arial, sans-serif',
									color: '#1f77b4'
								},
								tickfont: {color: '#1f77b4'},
								// position: 0.15,
								autorange: true
							}
						}
					}
					config={
						{
							// autosize: true,
							responsive: true,
							// scrollZoom: true, // to mousewheel or 2 finger zoom
							modeBarButtonsToRemove: ['lasso2d'],
						}
					}
					style={
						{
							width: '100%',
							height: '100%'
						}
					}
				/>
			</Suspense>
			{/* <Suspense fallback={<BoltLoaderComponent />}>
			</Suspense> */}
		</>
	)
}

export default PlotlyWxRRChart;