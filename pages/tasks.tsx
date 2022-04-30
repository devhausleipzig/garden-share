import { Center, SimpleGrid, Spinner, useDisclosure } from "@chakra-ui/react";
import { on } from "events";
import AddTaskButton from "../components/AddTaskButton/AddTaskButton";
import AddTaskDrawer from "../components/AddTaskDrawer/AddTaskDrawer";
import { ModalAddTask } from "../components/ModalAddTask/ModalAddTask";
import TaskCard from "../components/TaskCard/TaskCard";
import { useTasks } from "../hooks/useTasks";

const Tasks = () => {
  const { tasks, today } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <SimpleGrid columns={{ lg: 3, xl: 4 }} spacing={8} marginTop={8}>
        <AddTaskButton clickHandler={onOpen} />
        {isOpen ? <AddTaskDrawer isOpen={isOpen} onClose={onClose} /> : null}
        {!!tasks.length &&
          tasks.map((task) => (
            <>
              <TaskCard
                key={task.identifier}
                status={
                  new Date(task.deadline) < new Date()
                    ? "overdue"
                    : new Date(task.deadline) >=
                      new Date(new Date().setDate(new Date().getDate() + 14))
                    ? "not urgent"
                    : "due soon"
                }
                type={task.type}
                steps={task.steps}
                identifier={task.identifier}
              />
            </>
          ))}

        {!tasks.length && (
          <Center>
            <Spinner />
          </Center>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Tasks;
