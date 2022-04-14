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
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
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
