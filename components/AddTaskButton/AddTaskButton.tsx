import { Box, Button, ButtonGroup, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type AddTaskButtonProps = {
  clickHandler: () => void;
};

const AddTaskButton = ({ clickHandler }: AddTaskButtonProps) => {
  return (
    <Button
      // width="20vw"
      height="10vh"
      border="2px"
      borderColor="blackAlpha.300"
      color="blackAlpha.300"
      borderStyle="dotted"
      _hover={{ textColor: "blackAlpha.600", borderColor: "blackAlpha.600" }}
      p="4rem"
      onClick={clickHandler}
      minW="18rem"
    >
      <Center>
        <Box display="flex" justifyContent="center" alignItems="center">
          <AddIcon m="1rem" />
          <Text>Add Task</Text>
        </Box>
      </Center>
    </Button>
  );
};

export default AddTaskButton;
