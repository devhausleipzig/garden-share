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
interface TaskStepsProps {
  textValue: string;
}
export const TaskSteps = ({ textValue }: TaskStepsProps) => {
  const [text, setText] = useState(textValue);
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Alert status="success">
        <Flex justifyContent={"space-between"} width={"full"}>
          <Box>
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
    </>
  );
};
