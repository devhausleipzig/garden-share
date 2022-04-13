import type { NextPage } from "next";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Collapse,
  Button,
  Image,
  Center,
  Flex,
  Text,
  Spacer,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import WeatherIcon from "./WeatherIcon";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const weather = {
  fog: "/fog.svg",
  rainSnow: "/rain-snow.svg",
  rain: "/rain.svg",
  sunRain: "/sun-rain.svg",
  sunSnow: "/sun-snow.svg",
  sun: "/sun.svg",
};

type Day = {
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
  path: string;
};

const DayCard = ({ date, weatherStart, weatherEnd, slots, path }: Day) => {
  const [day, setDay] = React.useState();

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
