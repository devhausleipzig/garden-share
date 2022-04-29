import { HStack, IconButton, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction, useState } from "react";
import { monthArray } from "../../utils/date";

interface Props {
  // currentMonth: number;
  monthIndex: number;
  setMonthIndex: Dispatch<SetStateAction<number>>;
}

export const MonthSelector = ({ monthIndex, setMonthIndex }: Props) => {
  return (
    <HStack spacing={2}>
      <IconButton
        color="#FFFBFA"
        bg="#27BBAD"
        aria-label="Previous Month"
        icon={<TriangleDownIcon style={{ transform: "rotate(90deg)" }} />}
        isRound
        isDisabled={monthIndex === 0}
        onClick={() => setMonthIndex(monthIndex - 1)}
      />
      <Text w={24} textAlign="center">
        {monthArray[monthIndex - 1]}
      </Text>
      <IconButton
        color="#FFFBFA"
        bg="#27BBAD"
        aria-label="Next Month"
        icon={<TriangleDownIcon style={{ transform: "rotate(-90deg)" }} />}
        isRound
        isDisabled={monthIndex >= monthArray.length - 1}
        onClick={() => setMonthIndex(monthIndex + 1)}
      />
    </HStack>
  );
};
