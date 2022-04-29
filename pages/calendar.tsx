import { Grid, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import DayCard, { DayCardProps } from "../components/DayCard/DayCard";
import MonthSelector from "../components/MonthSelector/MonthSelector";
import { useMonth } from "../hooks/useMonth";

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
  const { availability, currentMonth } = useMonth();
  return (
    <div>
      <VStack>
        <MonthSelector currentMonth={currentMonth} />
        <Grid templateColumns="repeat 7, 1fr" gap={5}>
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
        </Grid>
      </VStack>
    </div>
  );
};

export default Calendar;
