import type { NextPage } from "next";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
import MockHeader from "../components/MockHeader/MockHeader";

const MessageBoard: NextPage = () => {
  return (
    <div>
      <EmojiReaction />
    </div>
  );
};

export default MessageBoard;
