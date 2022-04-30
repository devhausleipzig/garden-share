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
  FormControl,
  InputGroup,
  InputRightElement,
  DrawerHeader,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TaskStep, TaskStepProps } from "./TaskStep";
import "./styles.module.css";

export type TaskType =
  | "NONE"
  | "HARVESTING"
  | "WATERING"
  | "PRUNING"
  | "SEEDING"
  | "BUILDING"
  | "WEEDING";

export type RepeatsType = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY";

export type AddTaskDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddTaskDrawer({ isOpen, onClose }: AddTaskDrawerProps) {
  const [startDate, setStartDate] = useState(new Date());
  const firstField = useRef(null);
  const [taskType, setTaskType] = useState<TaskType>("NONE");
  const [repeats, setRepeats] = useState<RepeatsType>("NONE");
  const [deadline, setDeadline] = useState<Date | any>();
  const [steps, setSteps] = useState<TaskStepProps[]>([]);
  const [instruction, setInstruction] = useState<string>("");

  const sendTaskData = async () => {
    try {
      if (taskType === "NONE") return;
      if (taskType === undefined) return;
      if (!steps) return;
      const data = {
        type: taskType,
        repeating: repeats,
        deadline: startDate,
        steps: steps.map((step) => step.textValue).join(", "),
      };
      const response = await fetch("http://localhost:8000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const addStep = () => {
    if (!steps && instruction) {
      setSteps([{ textValue: instruction, id: nanoid(10) }]);
    } else if (instruction && steps!.length < 5) {
      setSteps([...steps, { textValue: instruction, id: nanoid(10) }]);
    }
    setInstruction("");
  };

  const closeStepHandler = (id: string) => {
    console.log(steps);
    const newSteps = steps.filter((s) => s.id != id);
    console.log(newSteps);
    setSteps(newSteps);
  };
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
          <DrawerHeader color="#401743">Create a new Task</DrawerHeader>

          <DrawerBody as={VStack} spacing={8} mt={8}>
            <Select
              _placeholder={{ color: "#401743", opacity: 0.4 }}
              borderColor="rgba(64,23,67,0.4)"
              ref={firstField}
              placeholder="Choose type of task"
              focusBorderColor="#1287aa"
              _selected={{ backgroundColor: "#1287aa" }}
              color="#401743"
              onChange={(e) => {
                setTaskType(e.target.value as TaskType);
              }}
            >
              <option value="NONE">-</option>
              <option value="HARVESTING">Harvesting</option>
              <option value="WATERING">Watering</option>
              <option value="PRUNING">Pruning</option>
              <option value="SEEDING">Seeding</option>
              <option value="BUILDING">Building</option>
              <option value="WEEDING">Weeding</option>
            </Select>

            <Select
              defaultValue={"NONE"}
              value={repeats}
              onChange={(e) => {
                setRepeats(e.target.value as RepeatsType);
              }}
            >
              <option value="NONE">None</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
            </Select>

            <Box
              borderStyle="solid"
              border="1px"
              borderColor="rgba(64,23,67,0.4)"
              color="#401743"
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
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"text"}
                placeholder="Add Instruction"
                value={instruction}
                onChange={(e) => {
                  setInstruction(e.target.value);
                }}
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={addStep}>
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
            {steps.map((step, index) => {
              return (
                <TaskStep
                  key={index}
                  id={step.id}
                  textValue={step.textValue}
                  closeHandler={closeStepHandler}
                />
              );
            })}
          </DrawerBody>
          <DrawerFooter justifyContent="flex-end" pr={0} as={HStack}>
            <Button
              type="submit"
              variant="outline"
              mr={3}
              onClick={sendTaskData}
              bg="#1287aa"
              color="#fffbfa"
            >
              Create task
            </Button>{" "}
          </DrawerFooter>
        </DrawerContent>{" "}
      </Drawer>
    </>
  );
}
