import Timeslot from "./Timeslot";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Timeslot", () => {
  it("Should be disabled when booked", () => {
    const { getByLabelText } = render(
      <Timeslot time={"10:00-11:00"} status={"booked"} />
    );
    const button = getByLabelText("Timeslot");
    expect(button).toBeDisabled();
  });
});
