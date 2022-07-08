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
import { Task, TimeslotProps, User } from "../../utils/types";
import { setDate, setHours, setMinutes } from "date-fns";
import { useTask } from "../../hooks/useTask";
import router, { useRouter } from "next/router";
import { getDateForForm } from "../../utils/date";
import { postBooking } from "../../hooks/useBooking";
import { useAuth } from "../../context/authContext";

export type BookingType = {
  timeslot: TimeslotProps;
  taskId: string;
};

type SelectedTask = {
  label: string;
  value: string;
};

const BookingForm = ({ timeslot }: BookingType) => {
  const { user } = useAuth();
  const tasks = useTask();
  const router = useRouter();
  const queryParams = router.query;
  const slot = JSON.parse(queryParams.slot as string);
  const taskId = queryParams.task;
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 12)
  );
  const [titleState, setTitleState] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedTask, setSelectedTask] = useState<SelectedTask>({
    label: "loading",
    value: taskId as string,
  });
  const chakraStyles: ChakraStylesConfig = {
    container: (provided, state) => ({
      ...provided,
      w: "100%",
      borderColor: "rgba(64,23,67,0.4)",
      _placeholder: "rgba(64,23,67,0.4)",
    }),
  };

  // TASK ACTION //

  useEffect(() => {
    let chosenTask = tasks.find((task) => task.identifier === taskId);
    setSelectedTask({
      label: chosenTask?.type!,
      value: taskId as string,
    });
  }, [tasks]);

  // DATE ACTION //
  useEffect(
    () =>
      setStartDate(getDateForForm(queryParams.date as string, slot.time).start),
    []
  );

  const clickHandler = () => {
    postBooking(
      user as User,
      tasks.find((task) => task.identifier === selectedTask.value),
      getDateForForm(queryParams.date as string, slot.time).end,
      startDate,
      checkedItems[1],
      checkedItems[0],
      checkedItems[2],
      titleState
    );
    router.push("calendar");
  };

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
          showTimeSelect
          timeCaption="Time"
          timeFormat="HH:mm"
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 0), 19)}
          timeIntervals={60}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy HH:mm"
        />
        <HStack width="100%">
          //do we need a new get route for task/:id??
          <Select
            value={selectedTask}
            // defaultValue={taskId}
            onChange={(value) => setSelectedTask(value as SelectedTask)}
            chakraStyles={chakraStyles}
            colorScheme="#401743"
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
          <Button
            backgroundColor="#26BBAD"
            type="submit"
            onClick={clickHandler}
          >
            submit
          </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
};

export default BookingForm;
