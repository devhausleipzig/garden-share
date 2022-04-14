import type { NextPage } from "next";
import MockHeader from "../components/MockHeader/MockHeader";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";

const weatherValuesTEST = {
  bgImg: "/images/sunny.webp",
  icon: '/addIcon.svg',
  temperature: 100,
  wind: 0,
  minTemp: 50,
  maxTemp: 100,
  precipitation: 90
}

const Calendar: NextPage = () => {
  return <div>test
    <WeatherWidget {...weatherValuesTEST} />
  </div>;
};

export default Calendar;
