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
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const MessageCard: NextPage = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <Center>
        <Flex
          backgroundColor="tomato"
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
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              boxSize="100px"
              objectFit="cover"
              borderRadius={15}
            />
            <Flex flexDirection="column" gap="6">
              <Collapse startingHeight={100} in={show}>
                <Flex alignItems="center" gap="6">
                  <Text fontSize="xl">Yooo - Nice BBQ coming up</Text>
                  <Text fontSize="xs">13/04/22 14:23</Text>
                </Flex>
                <Text>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </Text>
              </Collapse>
              <Flex alignItems="center" gap="2">
                {/* pladceholder for emoji component */}
                <Button size="xs">😍</Button>
                <Button size="xs">🤠</Button>
                <Button size="xs">🤧</Button>
                <Spacer></Spacer>
                <IconButton
                  size="xs"
                  onClick={handleToggle}
                  aria-label="Search database"
                  icon={show ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default MessageCard;
