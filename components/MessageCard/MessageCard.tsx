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
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import EmojiReaction from "../EmojiReaction/EmojiReaction";
import { useAuth } from "../../context/authContext";
import {EmojiProps} from "../components/EmojiReaction/EmojiReaction";

type User = {
  name: string;
  image: string;
};

export type Message = {
  type: "LargeCard" | "SmallCard";
  title: string;
  content: string;
  date: string;
  user: User;
  img?: string;
  emojiProps:EmojiProps[]
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const MessageCard = ({ type, title, content, date, img,emojiProps }: Message) => {
  const [show, setShow] = React.useState(type === "LargeCard" ? true : false);
  const [emojis, setEmojis] = useState<EmojiProps[]> (emojiProps)
  const handleToggle = () => setShow(!show);
  //TODO: comeback to fix user.id, line 115
  const {user } = useAuth()

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
        >
          <Flex gap="6">
            <Image
              src={"https://bit.ly/dan-abramov"}
              alt={"Dan Abramov"}
              boxSize="100px"
              objectFit="cover"
              borderRadius={15}
            />
            <Flex flexDirection="column" gap="2">
              <Flex alignItems="center" gap="6">
                <Text fontSize="xl" textColor={colors.text}>
                  {title ? title : "Yooo - Nice BBQ coming up"}
                </Text>
                <Text fontSize="xs" textColor={colors.text}>
                  {date ? date : "13/04/22 14:23"}
                </Text>
              </Flex>
              <Flex gap="4" flexDir="column">
                {type === "LargeCard" && (
                  <Image
                    src={img ? img : "./bbq.jpg"}
                    alt="bbq"
                    objectFit="cover"
                    borderRadius={15}
                    mt="4"
                  />
                )}
                <Text textColor={colors.text} noOfLines={!show ? 1 : undefined}>
                  {content
                    ? content
                    : `Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.`}
                </Text>
              </Flex>
              <Flex alignItems="center" gap="2">
                    
                  { !user && <EmojiReaction emojiProps={emojis} userId={"1"}/> }
                
                <Spacer></Spacer>
                {type === "SmallCard" && (
                  <IconButton
                    backgroundColor={colors.buttons}
                    textColor={colors.offwhite}
                    size="sm"
                    onClick={handleToggle}
                    aria-label="Search database"
                    icon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default MessageCard;
