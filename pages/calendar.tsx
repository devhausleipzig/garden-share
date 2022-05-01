import {
  Grid,
  GridItem,
  SimpleGrid,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import BookingDrawer, {
  BookingDrawerProps,
} from "../components/BookingDrawer/BookingDrawer";
import DayCard, { DayCardProps } from "../components/DayCard/DayCard";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import { useDay } from "../hooks/useDay";
import { useMonth } from "../hooks/useMonth";
import { currentMonth } from "../utils/date";

// Define Props

// interface CalendarProps extends DayCardProps {
//   clickHandler: () => void;
// }

interface CalendarProps extends BookingDrawerProps {
  clickHandler: () => void;
}
// Create Post request in bookingdrawer

// write hook to get month availability

// forEach availability array element create daycard

// create clickhandler that opens bookingdrawer and maps bookings for the day

//

const Calendar: NextPage = () => {
  const [monthIndex, setMonthIndex] = useState(currentMonth);
  const { availability } = useMonth(monthIndex);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const { bookings, tasks } = useDay(selectedDay);
  const { onClose } = useDisclosure();

  function clickHandler(date: number) {
    setSelectedDay(date);
    setIsOpen(true);
  }
  return (
    <div>
      <VStack marginTop={4}>
        <MonthSelector monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
        <SimpleGrid columns={7} spacing={5}>
          {!!availability.length &&
            availability.map((day, index) => (
              <DayCard
                key={index}
                date={index + 1}
                weatherStart={"fog"}
                weatherEnd={"fog"}
                slots={day}
                onClick={clickHandler}
              />
            ))}
        </SimpleGrid>
        <BookingDrawer
          isOpen={isOpen}
          onClose={onClose}
          tasks={tasks}
          timeSlots={bookings.map((booking) => ({
            bookedBy: booking.userId,
            status: "free",
            time: `${booking.start} - ${booking.end}`,
          }))}
          clickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </VStack>
    </div>
  );
};

export default Calendar;
