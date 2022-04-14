import { Icon } from "@chakra-ui/react";

type Props = {
  iconName: "watering" | "weeding" | "pruning" | "building";
  color?: string;
};

const TaskTypeIcons = ({ iconName, color = "currentColor" }: Props) => {
  if (iconName === "watering") {
    return (
      <Icon color={color} viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M9.882 9.093c-.511 4.115-3.121 4.847-3.121 7.708C6.761 18.567 8.244 20 10 20c1.756 0 3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708c-.016-.123-.219-.123-.235 0zm-5.999-9C3.372 4.208.762 4.939.762 7.801C.762 9.566 2.244 11 4 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708c-.015-.123-.219-.123-.234 0zm12 0c-.511 4.115-3.121 4.847-3.121 7.708C12.762 9.566 14.244 11 16 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708c-.016-.123-.219-.123-.234 0z"
        ></path>
      </Icon>
    );
  }
  if (iconName === "weeding") {
    return (
      <Icon color={color} viewBox="0 0 22 22">
        <path
          fill="currentColor"
          d="M19.3 7.2C17.5 4.7 14.9 3 12 2c14.2 8.5 3.4 20.9-3.5 13.5l-2.6.5l-3.4 3.4c-.6.6-.6 1.6 0 2.1c.6.6 1.6.6 2.1 0l3.2-3.2c7.5 6 17.2-3.3 11.5-11.1Z"
        ></path>
      </Icon>
    );
  }
  if (iconName === "pruning") {
    return (
      <Icon color={color} viewBox="0 0 22 22">
        <path
          fill="currentColor"
          d="m12 14.121l-2.317 2.317a4 4 0 1 1-2.121-2.121L9.88 12L4.21 6.333a2 2 0 0 1 0-2.829l.708-.707L12 9.88l7.081-7.082l.708.707a2 2 0 0 1 0 2.829L14.12 12l2.317 2.317a4 4 0 1 1-2.121 2.121L12 14.12zM6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
        ></path>
      </Icon>
    );
  }
  if (iconName === "building") {
    return (
      <Icon color={color} viewBox="0 0 22 22">
        <path
          fill="currentColor"
          d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"
        ></path>
      </Icon>
    );
  }
  return null;
};

export default TaskTypeIcons;
