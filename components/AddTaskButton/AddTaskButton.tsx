import styles from "../../styles/AddTaskButton.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
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
      width="20vw"
      height="10vh"
      border="2px"
      borderColor="blackAlpha.300"
      color="blackAlpha.300"
      borderStyle="dotted"
      _hover={{ textColor: "blackAlpha.600", borderColor: "blackAlpha.600" }}
      display="flex"
      justifyContent="space-between"
      p="4rem"
      onClick={clickHandler}
    >
      <AddIcon />
      <Text>Add Task</Text>
    </Button>
  );
};

export default AddTaskButton;
