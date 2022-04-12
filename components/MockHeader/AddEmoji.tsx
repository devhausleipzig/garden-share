import { useState } from "react";

interface EmojiProps{
    emoji: string,
    count: number
}

export default function AddEmoji({emoji, count}:EmojiProps){
    const [counter, setCounter] = useState(count);

    const increase = () => {
        setCounter(counter => counter + 1);
      };
    return(
        <span onClick={increase} >
            {`${emoji} ${counter}`}
        </span>
    )
}