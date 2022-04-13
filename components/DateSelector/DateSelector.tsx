import { Box, HStack, Select, Image, IconButton } from "@chakra-ui/react";
import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const DateSelector = () => {
  const [yearNumber, setYearNumber] = useState<number>(2022);

  return (
    <HStack justify={"space-between"}>
      <HStack spacing={4}>
        <IconButton
          color="#FFFBFA"
          bg="#27BBAD"
          aria-label="Previous Month"
          icon={<TriangleDownIcon style={{ transform: "rotate(90deg)" }} />}
          isRound
          onClick={() => {
            if (yearNumber >= 2018) {
              setYearNumber(yearNumber - 1);
            }
          }}
        />
        <p>{yearNumber}</p>
        <IconButton
          color="#FFFBFA"
          bg="#27BBAD"
          aria-label="Next Month"
          icon={<TriangleDownIcon style={{ transform: "rotate(-90deg)" }} />}
          isRound
          onClick={() => {
            if (yearNumber < 2022) {
              setYearNumber(yearNumber + 1);
            }
          }}
        />
      </HStack>
      <Select variant="filled" placeholder="Select Month" w="20%">
        <option value="option1">January</option>
        <option value="option2">February</option>
        <option value="option3">March</option>
        <option value="option4">April</option>
        <option value="option5">May</option>
        <option value="option6">June</option>
        <option value="option7">July</option>
        <option value="option8">August</option>
        <option value="option9">September</option>
        <option value="option10">October</option>
        <option value="option11">November</option>
        <option value="option12">December</option>
      </Select>
      <IconButton
        color="#FFFBFA"
        bg="#27BBAD"
        aria-label="Add Message"
        icon={<AddIcon />}
        isRound
      />
    </HStack>
  );
};

export default DateSelector;
