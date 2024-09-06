import { Box } from "@chakra-ui/react";
import Home from "./home";
import Status from "./status";
import Profile from "./profile";

export default function Content() {
  return (
    <Box
      position="absolute"
      top={0}
      display="flex"
      flexDirection="column"
      borderX="1px"
      borderColor="secondary"
      width="41%"
      minHeight="full"
      ml="10%"
      mr="18%"
      py="20px"
      color="white">
      <Status />
    </Box>
  );
}
