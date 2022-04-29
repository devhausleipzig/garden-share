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
        status={"overdue"}
        title={""}
        description={[]}
        viewClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
        signUpClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default DBDueTasks;
