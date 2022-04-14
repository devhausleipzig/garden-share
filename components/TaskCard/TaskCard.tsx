import { Box, VStack, Image, HStack, Text, Button } from "@chakra-ui/react";

export type Status = "overdue" | "due soon" | "not urgent";

export type TaskCardProps = {
  clickHandler: () => void;
  buttonClickHandler: () => void;
  status: Status;
  title: string;
  description: string;
  assigned?: boolean;
  stars: number;
};

const TaskCard = ({
  clickHandler,
  buttonClickHandler,
  status,
  title,
  description,
  assigned,
  stars,
}: TaskCardProps) => {
  return (
    <HStack
      border={0.5}
      borderColor="blackAlpha.600"
      borderStyle="solid"
      color="blackAlpha.600"
      onClick={clickHandler}
      alignItems="flex-start"
      minW={72}
      // p={0}
      height="300px"
    >
      <Image
        src="https://images.unsplash.com/photo-1555955208-94f6fafea771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="This is a Task Image."
        width="40%"
        height="100%"
        objectFit="cover"
      />
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        p={3}
        height="100%"
      >
        <Box>
          <Text fontWeight="bold" fontSize="2xl" color="#401743">
            {title}
          </Text>
          <Box
            display="inline-block"
            backgroundColor={
              status === "overdue"
                ? "#F6886F"
                : status === "due soon"
                ? "#fcb602"
                : "#27bbad"
            }
            rounded="lg"
            px={2}
          >
            <Text color="#fffbfa">{status}</Text>
          </Box>
          <Text color="#401743" noOfLines={4}>
            {description}
          </Text>
        </Box>

        <HStack>
          <Button bg="#1287aa" color="#fffbfa" onClick={buttonClickHandler}>
            Sign Up for task
          </Button>
          <Text color="rgba(64,23,67,0.4)">{`+ ${stars} ${
            stars === 1 ? "Star" : "Stars"
          }`}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default TaskCard;
