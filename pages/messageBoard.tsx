import type { NextPage } from "next";
import { useState, useRef } from "react";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
import MockHeader from "../components/MockHeader/MockHeader";

const MessageBoard: NextPage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  return (
    <div>
      <MessageBoard />
    </div>
  );
};

export default MessageBoard;
