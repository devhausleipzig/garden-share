import React from "react";
import DBDueTasks from "./DBDueTasks";
import DBMessages from "./DBMessages";
import DBEvents from "./DBEvents";
import { HStack, VStack, Text } from "@chakra-ui/react";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const Dash = () => {
  return (
    <>
      <HStack w="full" alignItems="top" paddingX="6" paddingTop="4" gap="4">
        <VStack>
          <Text fontSize="lg" w="100%" textAlign="left">
            Todays Weather
          </Text>
          <DBEvents />
        </VStack>
        <VStack>
          <Text fontSize="lg" w="100%" textAlign="left">
            Upcoming Events
          </Text>
          <DBEvents />
          <DBEvents />
          <DBEvents />
          <DBEvents />
        </VStack>
        <VStack>
          <Text fontSize="lg" w="100%" textAlign="left">
            Due Tasks
          </Text>
          <DBDueTasks />
          <DBDueTasks />
          <DBDueTasks />
        </VStack>
        <VStack>
          <Text fontSize="lg" w="100%" textAlign="left">
            Latest Messages
          </Text>
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
