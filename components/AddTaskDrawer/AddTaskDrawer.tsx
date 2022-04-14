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
  VStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
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
  const firstField = useRef(null);

  return (
    <>
      <Drawer
        initialFocusRef={firstField}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="#fffbfa">
          <DrawerCloseButton />

          <DrawerBody as={VStack} spacing={5} mt={10}>
            <Select
              ref={firstField}
              placeholder="Choose type of task"
              focusBorderColor="#1287aa"
              _selected={{ backgroundColor: "#1287aa" }}
            >
              {types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </Select>
            <Input placeholder="Task title" focusBorderColor="#1287aa" />
            <Box
              borderStyle="solid"
              border="1px"
              borderColor="#E2E8F0"
              w="100%"
              px={4}
              py={2}
              borderRadius="lg"
              //   _focusWithin={{ borderColor: "#1287aa", borderWidth: "2px" }}
            >
              <HStack>
                <Text cursor="default">Due:</Text>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </HStack>
            </Box>
            <Textarea placeholder="Describe task" focusBorderColor="#1287aa" />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={clickHandler}
              bg="#1287aa"
              color="#fffbfa"
            >
              Create task
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
