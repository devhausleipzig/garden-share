import { Grid, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import DayCard, { DayCardProps } from "../components/DayCard/DayCard";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
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

  return (
    <div>
      <VStack>
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
      </VStack>
    </div>
  );
};

export default Calendar;
