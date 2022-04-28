import {
  Alert,
  AlertDescription,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export interface TaskStepsProps {
    id?: number
  textValue: string
}

export const TaskSteps = ({ textValue }: TaskStepsProps) => {
  const [text, setText] = useState(textValue);
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return (
    <Center>
      <Alert status="success" rounded='md' w={"90%"}>
        <Flex justifyContent={"space-between"} width={"full"}>
          <Box rounded='md'>
            <AlertDescription>{textValue}</AlertDescription>
          </Box>

          <CloseButton
            alignSelf="flex-end"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Flex>
      </Alert>
    </Center>
  );
};
