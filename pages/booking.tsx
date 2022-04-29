import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import BookingForm, {
  BookingType,
} from "../components/BookingForm/BookingForm";


const Booking = ({
  title,
  date,
  task,
  isPrivate,
  isOvernight,
  isShared,
}: BookingType) => {
  return (
    <Center width="100%" height="100%">
      <BookingForm />
    </Center>
  );
};

export default Booking;
