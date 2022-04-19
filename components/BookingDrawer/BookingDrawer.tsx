import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Spacer,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import Tasks from "../../pages/tasks";
import TaskSelector, { Task } from "../TaskSelector/TaskSelector";
import Timeslot, { TimeslotProps } from "../Timeslot/Timeslot";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
  timeSlots: TimeslotProps[];
  clickHandler: () => void;
};

const timeSlots: TimeslotProps[] = [
  {
    time: "08:00 - 09:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "09:00 - 10:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "10:00 - 11:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "11:00 - 12:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "12:00 - 13:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "13:00 - 14:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "14:00 - 15:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "15:00 - 16:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "17:00 - 18:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "18:00 - 19:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "19:00 - 08:00",
    status: "free",
    bookedBy: "",
  },
];

function BookingDrawer({
  isOpen,
  onClose,
  tasks,
  timeSlots,
  clickHandler,
}: Props) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody as={VStack} spacing={2} mt={10}>
            {timeSlots.map((slot) => (
              <Timeslot {...slot} />
            ))}
            <Text
              fontSize="xl"
              w="100%"
              borderBottomStyle="solid"
              borderBottomColor="#401743"
              borderBottomWidth={2}
            >
              Tasks
            </Text>
            {tasks.map((task) => (
              <TaskSelector {...task} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              w="100%"
              onClick={clickHandler}
              bg="#1287aa"
              color="#fffbfa"
            >
              BOOK
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BookingDrawer;
