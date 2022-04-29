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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TaskCardStories from "../TaskCard/TaskCard.stories";

export type TaskDetailsModalProps = {
  steps: string;
  type: string;
  isOpen: boolean;
  onClose: () => void;
};

function ModalTaskDetails({
  steps,
  type,
  onClose,
  isOpen,
}: TaskDetailsModalProps) {
  const stepsArray = steps.split(",");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay
        opacity={1}
        bg="blackAlpha.300"
        backdropFilter="blur(2px)"
      />
      <ModalContent bg="#FFFBFA" color="#401743">
        <ModalHeader>{type}</ModalHeader>
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
      </ModalContent>
    </Modal>
  );
}

export default ModalTaskDetails;
