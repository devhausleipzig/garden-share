import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
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

type DayCardProps = {
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
  slots: number;
};

const DayCard = ({ date, weatherStart, weatherEnd, slots }: DayCardProps) => {
  const borderColor = () => {
    if (slots === 0) {
      return colors.borderFull;
    }
    if (slots === 12) {
      return colors.borderFree;
    }
    return colors.borderPartial;
  };
  return (
    <>
      <Center>
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
          {slots === 0 && (
            <Text textAlign="center">
              Fully<br></br>Booked
            </Text>
          )}
          {slots === 12 && (
            <Text textAlign="center">
              All<br></br>Free
            </Text>
          )}
          {slots > 0 && slots < 12 && (
            <Text textAlign="center">{`${slots} Slots Remaining`}</Text>
          )}
        </VStack>
      </Center>
    </>
  );
};

export default DayCard;
