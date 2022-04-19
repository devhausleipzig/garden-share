import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  IconButton,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { type } from "os";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import TaskDropDown from "./TaskDropDown";

type Booking = {
  title?: string;
  date: Date;
  task: string;
  isPrivate: boolean;
  isOvernight: boolean;
  isShared: boolean;
};

const Booking = ({
  title,
  date,
  task,
  isPrivate,
  isOvernight,
  isShared,
}: Booking) => {
  const [startDate, setStartDate] = useState(new Date());
  const [titleState, setTitleState] = useState("");
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [selectedTask, setSelectedTask] = useState([]);
  const addTaskDropDown = (event) => {
    setSelectedTask(
      selectedTask.concat(<TaskDropDown key={selectedTask.length} />)
    );
  };

  return (
    <VStack width="50%" spacing={3}>
      <FormControl>
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
        <HStack width="100%">
          <TaskDropDown />
          <IconButton icon={<AddIcon />} aria-label={""} size={"md"} />
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <Checkbox>Private?</Checkbox>
          <Checkbox>Overnight?</Checkbox>
          <Checkbox>Clip to Messageboard?</Checkbox>
          <Button type="submit">submit</Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default Booking;
