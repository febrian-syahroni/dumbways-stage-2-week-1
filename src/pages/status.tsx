import ContentStatus from "@/content/status";
import Sidebar from "@/sidebar";
import StatusBar from "@/status-bar";
import { Box } from "@chakra-ui/react";

export default function Status() {
  return (
    <Box
      backgroundColor="background"
      justifyContent="center"
      display="flex"
      width="full">
      <Sidebar />
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
        <ContentStatus />
      </Box>
      <StatusBar />
    </Box>
  );
}
