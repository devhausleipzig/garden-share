import React from "react";
import MessageCard from "../MessageCard/MessageCard";

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const DBDueTasks = () => {
  return (
    <>
      <MessageCard
        type={"SmallCard"}
        title={"Public Event"}
        content={
          "Reprehenderit deserunt veniam cupidatat sunt ipsum eiusmod cillum ullamco fugiat nulla minim. Do culpa quis culpa labore occaecat deserunt commodo laboris dolor tempor anim dolore id laboris. Amet dolor aliquip labore ex sit velit eu adipisicing. Occaecat pariatur nulla magna officia adipisicing adipisicing et cillum ad et. Ea consectetur id exercitation ut est aliqua eu. Tempor aliqua ad enim voluptate eu nulla velit sit consectetur veniam aliquip deserunt excepteur. Ipsum magna proident incididunt eu magna."
        }
        date={"29/04/21"}
        user={{
          name: "Dan Abramov",
          image: "https://bit.ly/dan-abramov",
        }}
        emojiProps={[]}
      />
    </>
  );
};

export default DBDueTasks;
