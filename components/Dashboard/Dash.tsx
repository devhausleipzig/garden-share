import React from "react";
import DBDueTasks from "./DBDueTasks";
import DBMessages from "./DBMessages";
import DBEvents from "./DBEvents";
import { HStack, VStack } from "@chakra-ui/react";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const Dash = () => {
  return (
    <>
      <HStack w="full" alignItems="top">
        <VStack>
          <DBEvents />
        </VStack>
        <VStack>
          <DBEvents />
          <DBEvents />
          <DBEvents />
          <DBEvents />
        </VStack>
        <VStack>
          <DBDueTasks />
          <DBDueTasks />
          <DBDueTasks />
        </VStack>
        <VStack>
          <DBMessages />
          <DBMessages />
          <DBMessages />
          <DBMessages />
        </VStack>
      </HStack>
    </>
  );
};

export default Dash;
