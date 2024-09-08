import { Text } from "@chakra-ui/react";
import UpdateStatus from "../../features/update-status";
import Posted from "../../features/posted";
import users from "@/data/users.json";

export default function ContentHome() {
  return (
    <>
      <Text fontSize="18px" px="20px" py="5px">
        Home
      </Text>
      <UpdateStatus placeholder="What is happening?!" button="Post" />
      {users.map((user, index) => (
        <Posted
          key={index}
          author={user.name}
          description={user.description}
          image={user.image}
        />
      ))}
    </>
  );
}
