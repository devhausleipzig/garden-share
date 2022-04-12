import { Box, VStack, Image, HStack, Text, Button } from "@chakra-ui/react";
const TaskCard = () => {
  return (
    <Box>
      <VStack>
        <Image />
        <Box>
          <HStack>
            <Text>Seeding</Text>
            <Box>
              <Text>Overdue</Text>
            </Box>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ipsum, atque architecto cumque vel in asperiores
              facere, dolor amet voluptate laborum at nostrum error earum
              dolorum nobis saepe dicta tempore?
            </Text>
            <Box>
              <HStack>
                <Button>Sign Up for task</Button>
                <Text>+2 Stars</Text>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default TaskCard;
