import { AddIcon } from "@chakra-ui/icons";
import {
  ChakraStylesConfig,
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  IconButton,
  Input,
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

type SelectedTask = {
  label: string;
  value: string;
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
  const [selectedTask, setSelectedTask] = useState<SelectedTask[]>([]);
  const chakraStyles: ChakraStylesConfig = {
    container: (provided, state) => ({
      ...provided,
      w: "100%",
    }),
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
          <Select
            onChange={(value) => setSelectedTask(value as SelectedTask[])}
            chakraStyles={chakraStyles}
            // @ts-ignore
            isMulti
            options={[
              {
                label: "watering",
                value: "watering",
              },
              {
                label: "building",
                value: "building",
              },
              {
                label: "harvesting",
                value: "harvesting",
              },
            ]}
          />
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <Checkbox isChecked={checkedItems[0]}>Private?</Checkbox>
          <Checkbox isChecked={checkedItems[1]}>Overnight?</Checkbox>
          <Checkbox isChecked={checkedItems[2]}>Clip to Messageboard?</Checkbox>
          <Button type="submit">submit</Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default Booking;
