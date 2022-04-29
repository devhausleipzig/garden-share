import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { title } from "process";
import { useEffect, useState } from "react";
import AddTaskButton from "../components/AddTaskButton/AddTaskButton";
import { ModalAddTask } from "../components/ModalAddTask/ModalAddTask";
import ModalTaskDetails from "../components/ModalTaskDetails/ModalTaskDetails";
import TaskCard from "../components/TaskCard/TaskCard";
import { useTasks } from "../hooks/useTasks";

const Tasks = () => {
  const { tasks, today } = useTasks();

  return (
    <Center>
      <SimpleGrid columns={{ lg: 3, xl: 4 }} spacing={8} marginTop={8}>
        <AddTaskButton clickHandler={() => {}} />

        {!!tasks.length &&
          tasks.map((task) => (
            <>
              <TaskCard
                key={task.identifier}
                status={
                  new Date(task.deadline) < new Date()
                    ? "overdue"
                    : new Date(task.deadline) >=
                      new Date(new Date().setDate(new Date().getDate() + 14))
                    ? "not urgent"
                    : "due soon"
                }
                type={task.type}
                steps={task.steps}
              />
            </>
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
