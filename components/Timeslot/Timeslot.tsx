import { Button, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction } from "react";
import { TimeslotProps } from "../../utils/types";

interface Props {
  slot: TimeslotProps;
  selectedSlot: TimeslotProps | null;
  setSelectedSlot: Dispatch<SetStateAction<TimeslotProps | null>>;
}

const Timeslot = ({ slot, selectedSlot, setSelectedSlot }: Props) => {
  const taken = !!slot.bookedBy;
  const isSelected = selectedSlot?.time === slot.time;
  const handleClick = () => {
    if (isSelected) return setSelectedSlot(null);
    if (!taken) setSelectedSlot(slot);
  };

  return (
    <Button
      onClick={handleClick}
      isDisabled={slot.status === "free" ? false : true}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="0px"
      bg={slot.status === "free" ? "#27BBAD" : "#F6886F"}
      w="100%"
      p={4}
      color="white"
      aria-label="Timeslot"
      fontSize="sm"
    >
      <Text pr={2}>{slot.time}</Text>
      <Text pr={2}>
        {slot.status === "free"
          ? " Free Time Slot"
          : ` Booked by ${slot.bookedBy}`}
      </Text>

      <CheckIcon boxSize="1.5em" opacity={isSelected ? 1 : 0} />
    </Button>
  );
};

export default Timeslot;
