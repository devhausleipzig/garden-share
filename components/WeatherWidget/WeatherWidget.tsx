import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from './weatherAPI'
// import dotenv from 'dotenv'

interface WeatherWidgetProps {
  bgImg: string;
  icon: string;
  temp: number;
  wind: number;
  minTemp: number;
  maxTemp: number;
  precipitation: number;
}

// dotenv.config({ path: '../../.env' })
// const WEATHER_API = process.env.WEATHER_API || 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const WEATHER_API = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
// const WEATHER_KEY = process.env.WEATHER_KEY || 'MS48M24PRXNCA6CYBA855WX8E';
const WEATHER_KEY =  'MS48M24PRXNCA6CYBA855WX8E';

export default function WeatherWidget({
  bgImg,
  icon,
  temp,
  wind,
  minTemp,
  maxTemp,
  precipitation,
}: WeatherWidgetProps) {
   const [info, setInfo] = useState <WeatherWidgetProps>()
  useEffect(() => {
    const city = 'ge' //req.params.city;
    const country = 'weimar' //req.params.country;
    const url = `${WEATHER_API}${city},${country}?key=${WEATHER_KEY}`;
    
    const resultsObj:WeatherWidgetProps = {
        bgImg: '',
  icon: '',
  temp: 0,
  wind: 0,
  minTemp: 0,
  maxTemp: 0,
  precipitation: 0
    }
    console.log('url: ', url)

    fetch(url, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }})
      .then(response => response.json())
      .then(results => {
        console.log('Success:', results);
        resultsObj.wind = results.currentConditions.windspeed;
        resultsObj.temp = results.currentConditions.temp;
        resultsObj.maxTemp = results.days[0].tempmax;
        resultsObj.minTemp = results.days[0].tempmin;
        resultsObj.precipitation = results.currentConditions.precip; 
        resultsObj.icon = results.currentConditions.icon;
        console.log('resultsObj[Server]: ', resultsObj);
        setInfo(resultsObj)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
   }, []);

  return (
    <Box
      minH={150}
      minW={200}
      maxH={200}
      maxW={300}
      rounded={"md"}
      bgSize={"cover"}
      bgPos={"center"}
      bgImage={bgImg}
    >
      <Flex flexDirection={"column"} gap={5} padding={6}>
        <Flex justifyContent={"space-between"}>
          <Image src={icon} bgPos={"center"} bgSize={"contain"} alt={""} />
          <Spacer></Spacer>
          <Box fontWeight={"extrabold"}> {`${info?.temp}°`} </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex justify={"space-between"}>
          <Box fontWeight={"bold"} textAlign={"center"}>
            <Text> wind </Text>
            <Text> {info?.wind} </Text>
          </Box>
          <Box fontWeight={"bold"} textAlign={"center"}>
            <Text> Min / Max </Text>
            <Text> {`${info?.minTemp} / ${info?.maxTemp}`} </Text>
          </Box>
          <Box fontWeight={"bold"} textAlign={"center"}>
            <Text> Precipitation </Text>
            <Text> {`${info?.precipitation}%`} </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
