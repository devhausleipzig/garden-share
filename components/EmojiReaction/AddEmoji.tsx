import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface EmojiProps {
  userId: string;
  users?: string[]; // ['id1', 'id2']
  emoji: string;
  count: number;
}

export default function AddEmoji({ userId, users, emoji, count }: EmojiProps) {
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
      setActiveEmoji(true);
    }
  };

  return (
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
  );
}
