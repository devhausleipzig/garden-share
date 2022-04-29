import { Grid, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import BookingDrawer from "../components/BookingDrawer/BookingDrawer";
import DayCard, { DayCardProps } from "../components/DayCard/DayCard";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import { useDay } from "../hooks/useDay";
import { useMonth } from "../hooks/useMonth";
import { currentMonth } from "../utils/date";

// Define Props

interface CalendarProps extends DayCardProps {
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
  const { bookings, tasks } = useDay(date);

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
              />
            ))}
        </SimpleGrid>
        <BookingDrawer
          isOpen={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
          tasks={[]}
          timeSlots={[]}
          clickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </VStack>
    </div>
  );
};

export default Calendar;
