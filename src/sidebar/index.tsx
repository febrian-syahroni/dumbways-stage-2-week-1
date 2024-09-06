import { Logo } from "@/components/logo";
import { Box } from "@chakra-ui/react";
import Menu from "./menu";
import Items from "./items";
import logout from "@/assets/sidebar/logout.svg";

export default function Sidebar() {
  return (
    <Box
      backgroundColor="background"
      position="fixed"
      display="flex"
      top={0}
      left={0}
      width="25%"
      height="full"
      flexDirection="column"
      justifyContent="space-between">
      <Box display="flex" padding="20px" flexDirection="column" gap="20px">
        <Logo />
        <Menu />
      </Box>
      <Box display="flex" px="20px" mb="40px">
        <Items src={logout} title="Logout" />
      </Box>
    </Box>
  );
}
