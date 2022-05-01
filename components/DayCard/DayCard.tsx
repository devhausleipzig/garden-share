import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BookingDrawerProps } from "../BookingDrawer/BookingDrawer";
import WeatherIcon from "./WeatherIcon";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
  borderFree: "#27BBAD",
  borderPartial: "#FCB602",
  borderFull: "#F6886F",
};

const weather = {
  fog: "/fog.svg",
  rainSnow: "/rain-snow.svg",
  rain: "/rain.svg",
  sunRain: "/sun-rain.svg",
  sunSnow: "/sun-snow.svg",
  sun: "/sun.svg",
};

export type DayCardProps = {
  date: number;
  weatherStart:
    | "fog"
    | "rainSnow"
    | "rain"
    | "sunRain"
    | "sunSnow"
    | "sun"
    | "thunderstorm";
  weatherEnd:
    | "fog"
    | "rainSnow"
    | "rain"
    | "sunRain"
    | "sunSnow"
    | "sun"
    | "thunderstorm";
  slots: string;
  onClick: (date: number) => void;
};

const DayCard = ({ date, weatherStart, weatherEnd, slots }: DayCardProps) => {
  const borderColor = () => {
    if (slots === "full") {
      return colors.borderFull;
    }
    if (slots === "free") {
      return colors.borderFree;
    }
    return colors.borderPartial;
  };
  return (
    <>
      <VStack
        backgroundColor={colors.offwhite}
        w="150px"
        h="150px"
        px="6"
        py="6"
        flexDirection="column"
        gap="2"
        borderRadius={15}
        boxShadow="md"
        alignContent="center"
        border="2px"
        borderColor={borderColor()}
      >
        <HStack justify="space-between" w="full">
          <Text fontSize="xl">{date && date}</Text>
          <HStack>
            <WeatherIcon iconName={weatherStart} color={colors.buttons} />
            <WeatherIcon iconName={weatherEnd} color={colors.buttons} />
          </HStack>
        </HStack>
        {slots === "full" && (
          <Text textAlign="center">
            Fully<br></br>Booked
          </Text>
        )}
        {slots === "free" && (
          <Text textAlign="center">
            All<br></br>Free
          </Text>
        )}
        {slots === "partial" && (
          <Text textAlign="center">{`Some Slots Remaining`}</Text>
        )}
      </VStack>
    </>
  );
};

export default DayCard;
