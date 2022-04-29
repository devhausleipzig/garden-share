import {
  Button,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
} from "@chakra-ui/react";
import { TaskStep, TaskStepProps } from "./TaskStep";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export type TaskType =
  | "NONE"
  | "HARVESTING"
  | "WATERING"
  | "PRUNING"
  | "SEEDING"
  | "BUILDING"
  | "WEEDING";
export type RepeatsType = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY";

export type AddTaskModalProps = {
  close: () => void;
};

export const ModalAddTask = () => {
  const [taskType, setTaskType] = useState<TaskType>("NONE");
  const [repeats, setRepeats] = useState<RepeatsType>("NONE");
  const [deadline, setDeadline] = useState<Date | any>();
  const [steps, setSteps] = useState<TaskStepProps[]>([]);
  const [instruction, setInstruction] = useState<string>("");

  const sendTaskData = () => {
    if (taskType === "NONE") return;
    if (taskType === undefined) return;
    if (!steps) return;
    const data = {
      taskType: taskType,
      repeats: repeats,
      deadline: deadline,
      steps: steps,
    };
    fetch('http://localhost:8000/task"', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
    const newSteps = steps.filter((s) => s.id != id);
    setSteps(newSteps);
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
            <TaskStep
              key={index}
              id={step.id}
              textValue={step.textValue}
              closeHandler={closeStepHandler}
            />
          );
        })}
        <Center>
          <Button w={"90%"} onClick={sendTaskData}>
            {" "}
            Add Task
          </Button>
        </Center>
      </Stack>
    </Center>
  );
};
