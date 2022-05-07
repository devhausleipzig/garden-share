import { Box, VStack, Image, HStack, Text, Button } from "@chakra-ui/react";

export type Status = "overdue" | "due soon" | "not urgent";

export type TaskCardProps = {
  viewClickHandler: () => void;
  signUpClickHandler: () => void;
  status: Status;
  title: string;
  description: string[];
  assigned?: boolean;
};

const TaskCard = ({
  viewClickHandler,
  signUpClickHandler,
  status,
  title,
  description,
  assigned,
}: TaskCardProps) => {
  return (
    <HStack
      border={0.5}
      borderColor="blackAlpha.600"
      borderStyle="solid"
      color="blackAlpha.600"
      alignItems="flex-start"
      height="15vh"
      borderRadius={4}
    >
      <Image
        src="https://images.unsplash.com/photo-1555955208-94f6fafea771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="This is a Task Image."
        width="40%"
        height="100%"
        objectFit="cover"
        borderLeftRadius={4}
      />
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        p={3}
        height="100%"
        w="60%"
      >
        <Box w="100%">
          <Text fontWeight="bold" color="#401743" fontSize="large">
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
            borderRadius={4}
            px={2}
          >
            <Text color="#fffbfa">{status}</Text>
          </Box>
        </Box>

        <HStack w="100%">
          {" "}
          <Button bg="#1287aa" color="#fffbfa" onClick={viewClickHandler}>
            Details
          </Button>
          <Button bg="#1287aa" color="#fffbfa" onClick={signUpClickHandler}>
            Sign Up
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default TaskCard;
