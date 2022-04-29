import { DrawerBody, VStack } from "@chakra-ui/react";
import React from "react";
import Timeslot, { TimeslotProps } from "../Timeslot/Timeslot";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const events: TimeslotProps[] = [
  {
    time: "08:00 - 09:00",
    status: "booked",
    bookedBy: "Dan Abramov",
    date: "30/04/22",
  },
];

const DBEvents = () => {
  return (
    <>
      <VStack spacing={2} mt={10}>
        {events.map((event, i) => (
          <Timeslot {...event} key={i} />
        ))}
      </VStack>
    </>
  );
};
export default DBEvents;
