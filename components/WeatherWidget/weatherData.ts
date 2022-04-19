import express from "express";
import cors from "cors";
import api from './weatherAPI'
import dotenv from 'dotenv'

dotenv.config({path:'../../.env'})
const WEATHER_API = process.env.WEATHER_API;
const WEATHER_KEY = process.env.WEATHER_KEY;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
    res.send("weather server is running");
});

let results:any;
const resultsObj = {
    temp:0,
    tempmax: 0,
    tempmin:0,
    precipprob:'',
    precip: 0,
    windspeed:0,
    description:'',
    icon:''
  }

app.post("/weather/:lat/:lon", async (req, _res) => {
    // console.log("response", req.params); 
    const lat = req.params.lat;
    const lon = req.params.lon;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${WEATHER_KEY}`;
    console.log('url: ', url)
    /*
   await api.get(url)
   .then((data:any) => {
    //  log('temp: ', data.data.currentConditions.temp)
     results = data.data;
  
    }).catch((err)=>console.log('ERR: ', err))
   
  // log('tempmax: ',results.days[0].tempmax) 
  // log('tempmin: ',results.days[0].tempmin) 
  resultsObj.description = results.description;
  resultsObj.windspeed = results.currentConditions.windspeed;
  resultsObj.temp = results.currentConditions.temp;
  resultsObj.tempmax = results.days[0].tempmax;
  resultsObj.tempmin = results.days[0].tempmin;
  resultsObj.precipprob = results.currentConditions.precipprob; // precipprob taken from conditions key !!
  resultsObj.precip = results.currentConditions.precip; // precipprob taken from conditions key !!
  resultsObj.icon = results.currentConditions.icon;
  console.log('resultsObj[Server]: ', resultsObj);
  _res.send(resultsObj);
    //  log('url: ', url)
    await api
      .get(url)
      .then((data: any) => {
        console.log("temp: ", data.data.currentConditions.temp);
        results = data.data;
      })
      .catch((err) => console.log("ERR: ", err));
  
    // log("tempmax: ", results.days[0].tempmax);
    // log("tempmin: ", results.days[0].tempmin);
*/  
});





const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`node server is running on port: ${PORT}`);
});