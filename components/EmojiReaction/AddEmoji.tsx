import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface EmojiProps {
    userId: string,
    users?: string[], // ['id1', 'id2']
    emoji: string;
    count: number;
}

interface Style {
    border: string
    backgroundColor: string
}

export default function AddEmoji({ userId, users, emoji, count }: EmojiProps) {
    const [counter, setCounter] = useState(count);
    const [activeEmoji, setActiveEmoji] = useState(true);
 
    useEffect((): void => {
        let checkUser = users?.some((usr) => userId === usr)
        if (checkUser) {
    
            // style.border = '2px solid #27BBAD'
            // style.backgroundColor = "rgba(39, 187,  173, 0.2)"
            setActiveEmoji(false)

        }

    }, []);

const increase = () => {
    let checkUser = users?.some((usr) => userId === usr)

    if (!checkUser) {
        setCounter(counter => counter + 1);
        users?.push(userId);
        setActiveEmoji(false)
    } else {
        setActiveEmoji(false)
    }
};

return (

    <Button onClick={increase} size={'sm'} padding={1} isActive={activeEmoji}  >
        {`${emoji} ${counter}`}
    </Button>
)
}