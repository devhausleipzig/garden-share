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
import { TaskSteps, TaskStepsProps } from "./TaskSteps";

import { useRef, useState } from "react";
const stepsArr: TaskStepsProps[] = [
  {
    id: 1,
    textValue: "step1",
  },
];
export type TaskType =
  | "NONE"
  | "HARVESTING"
  | "WATERING"
  | "PRUNING"
  | "SEEDING"
  | "BUILDING"
  | "WEEDING";
export type RepeatsType = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY";

export const ModalAddTask = () => {
  const [taskType, setTaskType] = useState<TaskType>("NONE");
  const [repeats, setRepeats] = useState<RepeatsType>("NONE");
  const [deadline, setDeadline] = useState<Date | any>();
  const [steps, setSteps] = useState<TaskStepsProps[]>(stepsArr);
  const [instruction, setInstruction] = useState<string>("");

  const addStep = () => {
    setSteps([...steps, { textValue: instruction }]);
    setInstruction("");
  };
  return (
    <Center>
      <Stack w={"75%"} textAlign={"center"}>
        <Heading as="h4" size="lg" textAlign={"center"}>
          Create new task
        </Heading>
        <HStack>
          <Select
            value={taskType}
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
        </HStack>

        <Input
          type={"date"}
          placeholder="date"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        />

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
            <TaskSteps key={index} id={step.id} textValue={step.textValue} />
          );
        })}
        <Center>
          <Button w={"90%"}> Add Task</Button>
        </Center>
      </Stack>
    </Center>
  );
};
