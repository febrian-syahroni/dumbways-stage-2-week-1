import { Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Content from "./content";
import StatusBar from "./status-bar";

export default function Home() {
  return (
    <Box backgroundColor="background" display="flex" width="full" height="full">
      <Sidebar />
      <Content />
      <StatusBar />
    </Box>
  );
}
