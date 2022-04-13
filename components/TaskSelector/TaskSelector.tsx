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
import { CheckIcon } from "@chakra-ui/icons";
import EmojiReaction from "../EmojiReaction/EmojiReaction";

type User = {
  name: string;
  image: string;
};

type Task = {
  title?: string;
  content?: string;
  date?: string;
  user?: User;
  status: "unchecked" | "checked";
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const TaskSelector = ({ title, content, date, user, status }: Task) => {
  const [check, setCheck] = React.useState();
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
            <Box>Image</Box>
            <Box>Task Name</Box>
            {status === "checked" && <CheckIcon></CheckIcon>}
            {status === "unchecked" && <Box></Box>}
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default TaskSelector;
