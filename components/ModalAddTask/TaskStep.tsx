import {
  Alert,
  AlertDescription,
  Box,
  Center,
  CloseButton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export interface TaskStepProps {
  id: string;
  textValue: string;
  closeHandler?: (id:string) => void;
 
}
export const TaskStep = ({id, textValue,closeHandler }: TaskStepProps) => {
  const [text, setText] = useState(textValue);
  const [stepId, setStepId] = useState(id);
  
  const localCloseHandler = ()=>{
    closeHandler!(stepId)
  }
  
  return (
    <Center>
      <Alert status="success" rounded="md" w={"90%"}>
        <Flex justifyContent={"space-between"} width={"full"}>
          <Box rounded="md">
            <AlertDescription>{text}</AlertDescription>
          </Box>

          <CloseButton
            alignSelf="flex-end"
            position="relative"
            right={-1}
            top={-1}
            onClick={localCloseHandler}
          />
        </Flex>
      </Alert>
    </Center>
  );
};
