import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export const ModalAddTask = () => {
  return (
    <>
      <Stack>
        <Heading as="h4" size="lg" textAlign={"center"}>
          Create new task
        </Heading>
        <HStack>
          <Select placeholder="Select a task">
            <option value="option1">Harvesting</option>
            <option value="option2">Watering</option>
            <option value="option3">Pruning</option>
            <option value="option3">Seeding</option>
            <option value="option3">Building</option>
            <option value="option3">Weeding</option>
          </Select>
          <Select defaultValue={"NONE"}>
            <option value=">NONE">None</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MONTHLY">Monthly</option>
          </Select>
        </HStack>

        <Input type={"date"} placeholder="date" />

        <InputGroup size="md">
          <Input pr="4.5rem" type={"text"} placeholder="Add Instruction" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Add
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </>
  );
};
