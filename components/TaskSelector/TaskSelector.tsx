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

type User = {
  name: string;
  image: string;
};

type Task = {
  title: string;
  content?: string;
  date?: string;
  user?: User;
  status: "unchecked" | "checked";
  type: "watering" | "weeding" | "building" | "pruning";
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const TaskSelector = ({ title, content, date, user, status, type }: Task) => {
  const [check, setCheck] = React.useState(status === "checked" ? true : false);
  const handleToggle = () => setCheck(!check);

  const style = {:focus {box-shadow: none !important}};

  return (
    <>
      <Center>
        <Flex
          backgroundColor={colors.offwhite}
          w="66%"
          px="6"
          py="6"
          flexDirection="column"
          gap="2"
          borderRadius={15}
          boxShadow="md"
          textColor={colors.text}
        >
          <Flex justify="space-between" align="center">
            <TaskSelectorIcons iconName={type} />
            {status === "checked" && <Text>{title}</Text>}
            {status === "unchecked" && <Text as="s">{title}</Text>}
            <IconButton
              variant="unstyled"
              aria-label={"checked-status"}
              onClick={handleToggle}
              style={style}
            >
              <TaskSelectorIcons iconName={!check ? "unchecked" : "checked"} />
            </IconButton>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default TaskSelector;
