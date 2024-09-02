import { Logo } from "@/components/logo";
import { Box } from "@chakra-ui/react";
import Menu from "./menu";
import Items from "./items";
import logout from "@/assets/sidebar/logout.svg";

export default function Sidebar() {
  return (
    <Box
      backgroundColor="background"
      display="flex"
      height="1117px"
      flexDirection="column"
      justifyContent="space-between">
      <Box display="flex" padding="40px" flexDirection="column" gap="20px">
        <Logo />
        <Menu />
      </Box>
      <Box display="flex" px="40px" pb="40px">
        <Items src={logout} title="Logout" />
      </Box>
    </Box>
  );
}
