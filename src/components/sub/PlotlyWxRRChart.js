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
		console.log(`arrayedData['fake_${table}_${key}_${axis}'] now exists...`);
	}

	// Could re-write these so they are grabbed from the imported (or returned) data, not hard coded
	const dailyCols = ['datetime', 'name', 'tempmax', 'tempmin', 'temp', 'feelslikemax', 'feelslikemin', 'feelslike', 'humidity', 'precip', 'precipprob', 'precipcover', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'cloudcover', 'visibility', 'sunrise', 'sunset', 'moonphase', 'conditions', 'description', 'icon', 'source'];
	const hourlyCols = ['datetime', 'name', 'temp', 'feelslike', 'humidity', 'precip', 'precipprob', 'preciptype', 'windgust', 'windspeed', 'winddir', 'pressure', 'visibility', 'cloudcover', 'conditions', 'icon', 'source'];

	const fakeName = fakeData['name'];
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
	
	// prints out all, both daily and hourly, x and y axis
	console.log(arrayedData.keys()); // ['fake_hourly_datetime_x', 'fake_hourly_temp_y', ... ]

	//! cool idea
	// forEach / map to generate plot data objects w/ x, y, type, mode, marker... titles corresponding, colors changing automatically, etc...
	// need to get more background data so can auto build appropriate data objects

	//! Also make sure that other non-graphed data is available...
	// like probably timezone, lat/lon, ...?
	// overall this means making sure I do indeed get such data back from SQL query (bottle server api endpoint)

	//? how to display daily data, and general station data?

	return (
		<>
			<Suspense fallback={<BoltLoaderComponent />}>
				{/* { wxData } */}
				<Plot
					data={
						[
							{
								name: 'hourly temp',
								x: [...fake_hourly_datetime_x],
								y: [...fake_hourly_temp_y],
								type: 'scatter',
								mode: 'markers',
								marker: {color: 'red'}
							},
							{
								name: 'hourly feelslike',
								x: [...fake_hourly_datetime_x],
								y: [...fake_hourly_feelslike_y],
								type: 'scatter',
								mode: 'markers',
								marker: {color: 'blue'}
							}
						]
					}
					layout={
						{
							width: 320,
							height: 240,
							title: 'Hourly WX Data for Red Rock Canyon, NCA (station: RRKN2)',
							xaxis: {
								title: 'hourly datetime'
							},
							yaxis: {
								title: 'temp'
							}
						}
					}
				/>
			</Suspense>
			<Suspense fallback={<BoltLoaderComponent />}>
				{/* <Plot
				/> */}
			</Suspense>
		</>
	)
}

export default PlotlyWxRRChart;