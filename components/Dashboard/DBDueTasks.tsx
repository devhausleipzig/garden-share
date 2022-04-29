import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const DBDueTasks = () => {
  return (
    <>
      <TaskCard
        clickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
        buttonClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
        status={"overdue"}
        title={""}
        description={""}
        stars={0}
      />
    </>
  );
};

export default DBDueTasks;
