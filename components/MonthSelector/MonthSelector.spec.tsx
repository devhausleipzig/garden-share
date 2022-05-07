import MonthSelector from "./MonthSelector";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MonthSelector", () => {
  it("should render out the correct month depending on the index we pass", () => {
    const { getByText } = render(<MonthSelector currentMonth={3} />);
    const monthText = getByText("April");
    expect(monthText).toBeVisible();
  });

  it("should disable the previous Button when in January", () => {
    const { getByLabelText } = render(<MonthSelector currentMonth={0} />);
    const prevButton = getByLabelText("Previous Month");
    const nextButton = getByLabelText("Next Month");
    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
  it("should disable the next Button when in December", () => {
    const { getByLabelText } = render(<MonthSelector currentMonth={11} />);
    const prevButton = getByLabelText("Previous Month");
    const nextButton = getByLabelText("Next Month");
    expect(nextButton).toBeDisabled();
    expect(prevButton).not.toBeDisabled();
  });
});
