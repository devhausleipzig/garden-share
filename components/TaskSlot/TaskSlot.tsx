import { Button, HStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

export type Status = "free" | "taken";

export type TaskSlotProps = {
  status: Status;
  bookedBy?: string;
  taskName: string;
};

const TaskSlot = ({ bookedBy, status, taskName }: TaskSlotProps) => {
  const [checked, setChecked] = useState<Boolean>(false);

  return (
    <Button
      onClick={() => setChecked(!checked)}
      isDisabled={status === "free" ? false : true}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="0px"
      bg={status === "free" ? "#27BBAD" : "#F6886F"}
      w="20%"
      p={7}
      color="white"
      aria-label="Taskslot"
    >
      <p
        style={
          status === "free"
            ? { textDecoration: "none" }
            : { textDecoration: "line-through" }
        }
      >
        {taskName}
      </p>
      <p>{status === "taken" && "already taken"}</p>

      <CheckIcon boxSize="1.5em" opacity={checked ? 1 : 0} />
    </Button>
  );
};

export default TaskSlot;
