import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { title } from "process";
import { useEffect, useState } from "react";
import AddTaskButton from "../components/AddTaskButton/AddTaskButton";
import TaskCard from "../components/TaskCard/TaskCard";
import { useTasks } from "../hooks/useTasks";

interface TasksProps extends Task {
  clickHandler: () => void;
  buttonClickHandler: () => void;
}

export type Task = {
  deadline: Date;
  type: string;
  steps: string[];
};

const mockData = [
  {
    type: "WATERING",
    deadline: "2022-04-29",
    steps: ["do this", "do that"],
    repeating: "WEEKLY",
  },
  {
    type: "SEEDING",
    deadline: "2023-04-25",
    steps: ["do this", "do that"],
    repeating: "WEEKLY",
  },
  {
    type: "WATERING",
    deadline: "2021-04-25",
    steps: ["do this", "do that"],
    repeating: "WEEKLY",
  },
];

const Tasks = ({
  deadline,
  type,
  steps,
  clickHandler,
  buttonClickHandler,
}: TasksProps) => {
  // const { tasks, today } = useTasks();

  return (
    <Flex px={16} py={8} wrap="wrap" gap={8}>
      <AddTaskButton
        clickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {mockData.length &&
        mockData.map((task) => (
          <TaskCard
            clickHandler={function (): void {
              throw new Error("Function not implemented.");
            }}
            buttonClickHandler={function (): void {
              throw new Error("Function not implemented.");
            }}
            status={
              new Date(task.deadline) < new Date()
                ? "overdue"
                : new Date(task.deadline) >=
                  new Date(new Date().setDate(new Date().getDate() + 14))
                ? "not urgent"
                : "due soon"
            }
            // status="overdue"
            title={task.type}
            description={task.steps}
          />
        ))}
      {!mockData.length && (
        <Center>
          <Spinner />
        </Center>
      )}
    </Flex>
  );
};

export default Tasks;
