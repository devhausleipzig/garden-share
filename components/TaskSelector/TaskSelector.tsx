import type { NextPage } from "next";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Collapse,
  Button,
  Image,
  Center,
  Flex,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import TaskSelectorIcons from "./TaskSelectorIcons";
import TaskTypeIcons from "./TaskTypeIcons";

type User = {
  name: string;
  image: string;
};

type Task = {
  title: string;
  content?: string;
  date?: string;
  user?: User;
  tasktype: "watering" | "weeding" | "pruning" | "building";
  taken: boolean;
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  selectedbg: "#FFFBFA",
  selectedtext: "#401743",
  unselectedbg: "#F2F1ED",
  unselectedtext: "#401743",
  takenbg: "rgba(64, 23, 67, 0.4)",
  takentext: "#FFFBFA",
};

const TaskSelector = ({
  title,
  content,
  date,
  user,
  taken,
  tasktype,
}: Task) => {
  const [select, setSelect] = React.useState(false);
  const handleToggle = () => setSelect(!select);

  return (
    <>
      <Center>
        <Flex
          backgroundColor={
            taken
              ? colors.takenbg
              : select
              ? colors.selectedbg
              : colors.unselectedbg
          }
          w="66%"
          px="6"
          py="6"
          flexDirection="column"
          gap="2"
          borderRadius={15}
          boxShadow="md"
          textColor={
            taken
              ? colors.takentext
              : select
              ? colors.selectedtext
              : colors.unselectedtext
          }
        >
          <Flex justify="space-between" align="center" minHeight="40px" gap="4">
            {tasktype === "watering" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "weeding" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "pruning" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "building" && <TaskTypeIcons iconName={tasktype} />}
            {!taken && <Text userSelect="none">{title}</Text>}
            {taken && (
              <Text userSelect="none" as="s">
                {title}
              </Text>
            )}
            <Spacer></Spacer>
            {!taken && (
              <IconButton
                variant="unstyled"
                aria-label={"checked-status"}
                onClick={handleToggle}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <TaskSelectorIcons
                  iconName={!select ? "unselected" : "selected"}
                />
              </IconButton>
            )}
            {taken && <Text userSelect="none">Already Taken</Text>}
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default TaskSelector;
