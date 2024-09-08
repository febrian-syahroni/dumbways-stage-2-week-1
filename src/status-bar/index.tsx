import { Box } from "@chakra-ui/react";
import Suggested from "./suggested";
import Meta from "./meta";
import Profile from "./profile";

export default function StatusBar() {
  return (
    <Box position="absolute" right="0" top={0} width="33%" height="auto">
      <Box
        display="flex"
        flexDirection="column"
        color="white"
        alignItems="start"
        gap="16px"
        padding="30px"
        backgroundColor="background">
        <Profile />
        <Suggested />
        <Meta />
      </Box>
    </Box>
  );
}
