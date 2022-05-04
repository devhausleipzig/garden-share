import { CheckIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { Task } from "../../utils/types";
import TaskTypeIcons from "./TaskTypeIcons";

interface Props {
  task: Task;
  selectedTask: string | null;
  setSelectedTask: Dispatch<SetStateAction<string | null>>;
}

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

const TaskSelector = ({ task, selectedTask, setSelectedTask }: Props) => {
  const taken = !!task.bookingId;
  const isSelected = task.identifier === selectedTask;
  const handleClick = () => {
    if (isSelected) return setSelectedTask(null);
    if (!taken) setSelectedTask(task.identifier!);
  };

  return (
    <HStack
      onClick={handleClick}
      cursor={taken ? "not-allowed" : "pointer"}
      backgroundColor={
        taken
          ? colors.takenbg
          : isSelected
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
          : isSelected
          ? colors.selectedtext
          : colors.unselectedtext
      }
    >
      <HStack align="center" fontSize="sm" gap="4">
        {task.type === "WATERING" && <TaskTypeIcons iconName={task.type} />}
        {task.type === "WEEDING" && <TaskTypeIcons iconName={task.type} />}
        {task.type === "PRUNING" && <TaskTypeIcons iconName={task.type} />}
        {task.type === "BUILDING" && <TaskTypeIcons iconName={task.type} />}
        {!taken && <Text userSelect="none">{task.type}</Text>}
        {taken && (
          <Text userSelect="none" as="s">
            {task.type}
          </Text>
        )}
      </HStack>
      {!taken && (isSelected ? <CheckIcon /> : null)}
      {taken && (
        <Text fontSize="xs" userSelect="none">
          Already Taken
        </Text>
      )}
    </HStack>
  );
};

export default TaskSelector;
