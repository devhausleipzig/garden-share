import {
  DrawerCloseButton,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Input,
  DrawerFooter,
  Select,
  Textarea,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export type AddTaskDrawerProps = {
  types: string[]; // will be replaced by union type when task types are defined
  title: string;
  dueDate: string;
  repeatChecked: boolean;
  repeatType:
    | "daily"
    | "every other day"
    | "weekly"
    | "every fortnight"
    | "monthly"
    | "every season"
    | "yearly"
    | "none";
  description: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  clickHandler: () => void;
};
export default function AddTaskDrawer({
  types,
  title,
  dueDate,
  repeatChecked,
  repeatType,
  description,
  isOpen,
  onOpen,
  onClose,
  clickHandler,
}: AddTaskDrawerProps) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Select placeholder="Choose type of task">
              {types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </Select>
            <Input placeholder="Task title" />
            <HStack>
              <Text>Due:</Text>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </HStack>
            <Textarea placeholder="Describe task" />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={clickHandler}>
              Create task
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
