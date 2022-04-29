import api from './weatherAPI'
import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })
const WEATHER_API = process.env.WEATHER_API || 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const WEATHER_KEY = process.env.WEATHER_KEY || 'MS48M24PRXNCA6CYBA855WX8E';


let results: any;
const resultsObj = {
  temp: 0,
  tempmax: 0,
  tempmin: 0,
  precipprob: '',
  precip: 0,
  windspeed: 0,
  description: '',
  icon: ''
}

//   "latitude": 50.977,
// "longitude": 11.3279,
// example: /weather/50.977/11.3279
/*
app.get("/weather/:lat/:lon", async (req, _res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;
  const url = `${WEATHER_API}${lat},${lon}?key=${WEATHER_KEY}`;
  console.log('url: ', url)

  await api.get(url)
    .then((data: any) => {
      results = data.data;
    }).catch((err) => console.log('ERR: ', err))

 resultsObj.description = results.description;
 resultsObj.windspeed = results.currentConditions.windspeed;
 resultsObj.temp = results.currentConditions.temp;
 resultsObj.tempmax = results.days[0].tempmax;
 resultsObj.tempmin = results.days[0].tempmin;
 resultsObj.precipprob = results.currentConditions.precipprob; 
 resultsObj.precip = results.currentConditions.precip; 
 resultsObj.icon = results.currentConditions.icon;
 console.log('resultsObj[Server]: ', resultsObj);
});


// example:  /city/weimar/ge
app.get("/city/:city/:country", async (req, _res) => {
  const city = req.params.city;
  const country = req.params.country;

  const url = `${WEATHER_API}${city},${country}?key=${WEATHER_KEY}`;
  console.log('url: ', url)

  await api.get(url)
    .then((data: any) => {
      results = data.data;
    }).catch((err) => console.log('ERR: ', err))

 resultsObj.description = results.description;
 resultsObj.windspeed = results.currentConditions.windspeed;
 resultsObj.temp = results.currentConditions.temp;
 resultsObj.tempmax = results.days[0].tempmax;
 resultsObj.tempmin = results.days[0].tempmin;
 resultsObj.precipprob = results.currentConditions.precipprob; 
 resultsObj.precip = results.currentConditions.precip; 
 resultsObj.icon = results.currentConditions.icon;
 console.log('resultsObj[Server]: ', resultsObj);
});

*/

