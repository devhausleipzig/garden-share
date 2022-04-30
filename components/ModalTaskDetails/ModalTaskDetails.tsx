import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button,
  Center,
  Spinner,
  ListItem,
  OrderedList,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import TaskCardStories from "../TaskCard/TaskCard.stories";

export type TaskDetailsModalProps = {
  steps: string;
  type: string;
  isOpen: boolean;
  onClose: () => void;
  identifier: string;
};

function ModalTaskDetails({
  steps,
  type,
  onClose,
  isOpen,
  identifier,
}: TaskDetailsModalProps) {
  const stepsArray = steps.split(",");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay
        opacity={1}
        bg="blackAlpha.300"
        backdropFilter="blur(2px)"
      />
      <ModalContent bg="#FFFBFA" color="#401743" borderRadius={4}>
        <ModalHeader bg="#27BBAD" borderTopRadius={4}>
          {type}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <OrderedList>
            {steps.length ? (
              stepsArray.map((step, i) => <ListItem key={i}> {step}</ListItem>)
            ) : (
              <Spinner />
            )}
          </OrderedList>
        </ModalBody>
        <ModalFooter justifyContent="flex-end" pr={0} as={HStack}>
          <NextLink href="/calendar" passHref>
            <Link>
              <Button
                type="submit"
                variant="outline"
                mr={3}
                onClick={() => sessionStorage.setItem("id", `${identifier}`)}
                bg="#1287aa"
                color="#fffbfa"
              >
                Sign up and go to calendar
              </Button>{" "}
            </Link>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalTaskDetails;
