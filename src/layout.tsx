import { Box } from "@chakra-ui/react";
import Content from "./content";
import StatusBar from "./status-bar";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <Box
      backgroundColor="background"
      justifyContent="center"
      display="flex"
      width="full">
      <Sidebar />
      <Content />
      <StatusBar />
    </Box>
  );
}
