import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface EmojiProps {
  userId: string;
  users?: string[]; // ['id1', 'id2']
  emoji: string;
  count: number;
  emojiID: string;
  renderAgain: (emojiID: string) => void;
}

export default function AddEmoji({
  renderAgain,
  userId,
  users,
  emoji,
  count,
  emojiID,
}: EmojiProps) {
  const [counter, setCounter] = useState(count);
  const [activeEmoji, setActiveEmoji] = useState(false);
  useEffect((): void => {
    let checkUser = users?.some((usr) => userId === usr);
    if (checkUser) setActiveEmoji(true);
  }, []);

  const increase = () => {
    let checkUser = users?.some((usr) => userId === usr);

    if (!checkUser) {
      setCounter((counter) => counter + 1);
      users?.push(userId);
      setActiveEmoji(true);
    } else {
      if (checkUser && counter > 1) {
        let userIndex = users?.indexOf(userId);
        if (userIndex != -1) users?.splice(userIndex!, 1);
        setCounter((counter) => counter - 1);
        setActiveEmoji(false);
      } else if (checkUser && counter <= 1) {
        renderAgain(emojiID);
      }
    }
  };

  return (
    <>
      <Button
        onClick={increase}
        size={"sm"}
        paddingX={3}
        rounded={"xl"}
        isActive={activeEmoji}
        _active={{
          bg: "rgba(39, 187,  173, 0.2)",
          border: "2px solid #27BBAD",
          color: "#27BBAD",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <Flex gap={2}>
          <span>{emoji}</span>
          <span>{counter}</span>
        </Flex>
      </Button>
    </>
  );
}
