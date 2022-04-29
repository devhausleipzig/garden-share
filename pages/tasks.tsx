import { Box, Center, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
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
  identifer: string;
  deadline: string;
  type:
    | "HARVESTING"
    | "WATERING"
    | "PRUNING"
    | "SEEDING"
    | "BUILDING"
    | "WEEDING";
  steps: string;
};

const Tasks = ({
  deadline,
  type,
  steps,
  clickHandler,
  buttonClickHandler,
}: TasksProps) => {
  const { tasks, today } = useTasks();

  return (
    <Center>
      <SimpleGrid columns={{ lg: 3, xl: 4 }} spacing={8} marginTop={8}>
        <AddTaskButton
          clickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        {!!tasks.length &&
          tasks.map((task) => (
            <TaskCard
              key={task.identifer}
              viewClickHandler={function (): void {
                throw new Error("Function not implemented.");
              }}
              signUpClickHandler={function (): void {
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
              description={task.steps.split(",")}
            />
          ))}
        {!tasks.length && (
          <Center>
            <Spinner />
          </Center>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Tasks;
