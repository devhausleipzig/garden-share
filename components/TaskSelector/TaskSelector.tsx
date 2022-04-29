import { CheckIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import TaskTypeIcons from "./TaskTypeIcons";

type User = {
  name: string;
  image: string;
};

export type Task = {
  title: string;
  content?: string;
  date?: string;
  user?: User;
  tasktype: "watering" | "weeding" | "pruning" | "building";
  taken: boolean;
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  selectedbg: "#FFFBFA",
  selectedtext: "#401743",
  unselectedbg: "#F2F1ED",
  unselectedtext: "#401743",
  takenbg: "rgba(64, 23, 67, 0.4)",
  takentext: "#FFFBFA",
};

const TaskSelector = ({ title, taken, tasktype }: Task) => {
  const [select, setSelect] = React.useState(false);

  const handleClick = () => {
    if (!taken) setSelect(!select);
  };

  return (
    <HStack
      onClick={handleClick}
      cursor={taken ? "not-allowed" : "pointer"}
      backgroundColor={
        taken
          ? colors.takenbg
          : select
          ? colors.selectedbg
          : colors.unselectedbg
      }
      p={4}
      w="100%"
      justifyContent="space-between"
      borderRadius="0px"
      textColor={
        taken
          ? colors.takentext
          : select
          ? colors.selectedtext
          : colors.unselectedtext
      }
    >
      <HStack align="center" fontSize="sm" gap="4">
        {tasktype === "watering" && <TaskTypeIcons iconName={tasktype} />}
        {tasktype === "weeding" && <TaskTypeIcons iconName={tasktype} />}
        {tasktype === "pruning" && <TaskTypeIcons iconName={tasktype} />}
        {tasktype === "building" && <TaskTypeIcons iconName={tasktype} />}
        {!taken && <Text userSelect="none">{title}</Text>}
        {taken && (
          <Text userSelect="none" as="s">
            {title}
          </Text>
        )}
      </HStack>
      {!taken && (select ? <CheckIcon /> : null)}
      {taken && (
        <Text fontSize="xs" userSelect="none">
          Already Taken
        </Text>
      )}
    </HStack>
  );
};

export default TaskSelector;
