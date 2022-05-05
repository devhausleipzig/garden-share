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
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TaskDropDown from "./TaskDropDown";
import { Task, TimeslotProps } from "../../utils/types";
import { setDate } from "date-fns";
import { useTask } from "../../hooks/useTask";

export type BookingType = {
  timeslot: TimeslotProps;
  taskId: string;
};

type SelectedTask = {
  label: string;
  value: string;
};

const BookingForm = ({ timeslot, taskId }: BookingType) => {
  const tasks = useTask();
  const [startDate, setStartDate] = useState(new Date());
  const [titleState, setTitleState] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedTask, setSelectedTask] = useState<SelectedTask>({
    label: "loading",
    value: taskId,
  });
  const chakraStyles: ChakraStylesConfig = {
    container: (provided, state) => ({
      ...provided,
      w: "100%",
      borderColor: "rgba(64,23,67,0.4)",
      _placeholder: "rgba(64,23,67,0.4)",
    }),
  };

  useEffect(() => {
    setSelectedTask({
      label: tasks.find((task) => task.identifier === taskId)?.type!,
      value: taskId,
    });
  }, [tasks]);

  return (
    <FormControl>
      <VStack width="50%" spacing={3}>
        <Input
          placeholder="Booking title"
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
          //do we need a new get route for task/:id??
          <Select
            value={selectedTask}
            // defaultValue={taskId}
            onChange={(value) => setSelectedTask(value as SelectedTask)}
            chakraStyles={chakraStyles}
            color="#401743"
            // @ts-ignore
            // isMulti
            options={tasks.map((task) => ({
              label: task.type,
              value: task.identifier,
            }))}
          />
        </HStack>
        <HStack width="100%" justifyContent="space-between">
          <Checkbox isChecked={checkedItems[0]}>Private?</Checkbox>
          <Checkbox isChecked={checkedItems[1]}>Overnight?</Checkbox>
          <Checkbox isChecked={checkedItems[2]}>Clip to Messageboard?</Checkbox>
          <Button backgroundColor="#26BBAD" type="submit">
            submit
          </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
};

export default BookingForm;
