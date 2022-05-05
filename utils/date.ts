import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const timezone = "Europe/Berlin";
export const getTime = (date: string) => {
  const zonedDate = utcToZonedTime(new Date(date), timezone);
  console.log(zonedDate);
  return format(zonedDate, "HH:mm");
};
export const currentMonth = new Date().getMonth() + 1;

export function getDateForForm(datestring: string, timeslot: string): Date {
  const [start, end] = timeslot.split(" - ");
  const Datum = datestring.concat;
}
