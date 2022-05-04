import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import BookingForm, {
  BookingType,
} from "../components/BookingForm/BookingForm";

const Booking = () => {
  const router = useRouter();
  const selectedDate = router.query.date;
  const taskId = router.query.task;
  const timeSlot = JSON.parse(router.query.slot as string);
  console.log(timeSlot);

  return (
    <Center width="100%" height="100%">
      <BookingForm timeslot={timeSlot} taskId={taskId as string} />
    </Center>
  );
};

export default Booking;
