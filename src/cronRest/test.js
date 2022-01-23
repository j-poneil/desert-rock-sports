// Past 30 days, daily
// up to yesterday, not today
// https://www.visualcrossing.com/weather/weather-data-services#
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/RRKN2/last30days?unitGroup=us&include=days&key=BVXYY87PZ6MXJ4BM6N5WKMU77&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});