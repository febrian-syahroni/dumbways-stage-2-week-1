import Posted from "@/features/posted";
import { Box, Image } from "@chakra-ui/react";
import users from "@/data/users.json";
import close from "@/assets/close-circle.svg";
import right from "@/assets/arrow-circle-right.svg";
import left from "@/assets/arrow-circle-left.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DetailImage() {
  const [open, setOpen] = useState<boolean>(true);

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <Box
      backgroundColor="background"
      justifyContent="center"
      display="flex"
      overflow="hidden"
      width="full">
      <Box position="relative" display="flex" width="full">
        <Link to="/home">
          <Image position="absolute" top={10} left={5} src={close} />
        </Link>
        <Image
          width="full"
          objectFit="contain"
          src="https://th.bing.com/th/id/OIP.1k4x4eZE_gJdQb9LgvzQeAHaFj?w=263&h=197&c=7&r=0&o=5&pid=1.7"
        />
        <Image
          onClick={handleOpen}
          cursor="pointer"
          position="absolute"
          top={10}
          right={5}
          boxSize={6}
          src={open ? right : left}
        />
      </Box>
      {open ? (
        <Box
          top={50}
          display="flex"
          flexDirection="column"
          borderX="1px"
          borderColor="secondary"
          overflow="auto"
          color="white">
          {users.map((user, index) => (
            <Posted
              key={index}
              author={user.name}
              description={user.description}
              image={user.image}
            />
          ))}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
