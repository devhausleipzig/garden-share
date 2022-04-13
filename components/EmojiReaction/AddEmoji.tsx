import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface EmojiProps {
  userId: string;
  users?: string[]; // ['id1', 'id2']
  emoji: string;
  count: number;
  index: number;
  rendeAgain: (value: number, index: number) => void;
}

export default function AddEmoji({
  rendeAgain,
  userId,
  users,
  emoji,
  count,
  index,
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
      if (checkUser) {
        let userIndex = users.indexOf(userId);
        if (userIndex != -1) users.splice(userIndex, 1);

        rendeAgain(counter, index);

        if (counter < 1) {
        }
        setCounter((counter) => counter - 1);
        setActiveEmoji(false);
      }
    }
  };
  // Just render the component when we have a count
  return (
    <>
      {counter ? (
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
      ) : //  if we dont have a count we render null which is basically non existent
      null}
    </>
  );
}
