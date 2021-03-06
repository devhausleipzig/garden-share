import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Text } from "@chakra-ui/react";

type AddTaskButtonProps = {
  clickHandler: () => void;
};

const AddTaskButton = ({ clickHandler }: AddTaskButtonProps) => {
  return (
    <Button
      height="15vh"
      border={0.5}
      borderColor="blackAlpha.300"
      color="blackAlpha.300"
      borderStyle="dotted"
      _hover={{ textColor: "blackAlpha.600", borderColor: "blackAlpha.600" }}
      p={16}
      onClick={clickHandler}
    >
      <Center>
        <Box display="flex" justifyContent="center" alignItems="center">
          <AddIcon m={4} />
          <Text>Add Task</Text>
        </Box>
      </Center>
    </Button>
  );
};

export default AddTaskButton;
