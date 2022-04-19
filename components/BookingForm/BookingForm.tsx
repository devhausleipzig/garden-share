import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const Booking: NextPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <VStack>
      <Input
        placeholder="Task title"
        focusBorderColor="#1287aa"
        _placeholder={{ color: "#401743", opacity: 0.4 }}
        borderColor="rgba(64,23,67,0.4)"
        color="#401743"
      ></Input>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <HStack>
        <Select placeholder="Pick a task">
          <option value="option 1">watering</option>
          <option value="option 2">pruning</option>
          <option value="option 3">harvesting</option>
        </Select>
        <IconButton icon={<AddIcon />} aria-label={""} size={"sm"} />
      </HStack>
    </VStack>
  );
};

export default Booking;
