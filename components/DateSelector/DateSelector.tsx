import { Select } from "@chakra-ui/react";

const DateSelector = () => {
  return (
    <Select variant="filled" placeholder="Select Month" w="20%">
      <option value="option1">January</option>
      <option value="option2">February</option>
      <option value="option3">March</option>
      <option value="option4">April</option>
      <option value="option5">May</option>
      <option value="option6">June</option>
      <option value="option7">July</option>
      <option value="option8">August</option>
      <option value="option9">September</option>
      <option value="option10">October</option>
      <option value="option11">November</option>
      <option value="option12">December</option>
    </Select>
  );
};

export default DateSelector;
