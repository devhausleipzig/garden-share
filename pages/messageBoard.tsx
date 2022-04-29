import type { NextPage } from "next";
import { useState, useRef } from "react";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";

const MessageBoard: NextPage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  return (
    <div>
      <EmojiReaction
        userId={"id1"}
        emojiProps={[
          {
            users: [],
            emoji: "🐑",
            count: 1,
            emojiID: "",
          },
          {
            users: [],
            emoji: "😁",
            count: 2,
            emojiID: "",
          },
        ]}
      />
    </div>
  );
};

export default MessageBoard;
