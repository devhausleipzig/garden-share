import { Button, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

export type Status = "free" | "booked";

export type TimeslotProps = {
  time: string;
  status: Status;
  bookedBy?: string;
};

const Timeslot = ({ time, bookedBy, status }: TimeslotProps) => {
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
      w="100%"
      p={4}
      color="white"
      aria-label="Timeslot"
      fontSize="sm"
    >
      <Text pr={2}>{time}</Text>
      <Text pr={2}>
        {status === "free" ? " Free Time Slot" : ` Booked by ${bookedBy}`}
      </Text>

      <CheckIcon boxSize="1.5em" opacity={checked ? 1 : 0} />
    </Button>
  );
};

export default Timeslot;
