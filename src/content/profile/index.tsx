import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import arrow from "@/assets/content/status/Line arrow-left.svg";
import ProfileItem from "@/features/profile";
import TabElement from "@/features/tabs";
import EditProfile from "@/features/edit-profile";
import { Link } from "react-router-dom";

export default function ContentProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex" flexDirection="column" px="20px" gap="8px">
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        gap="10px"
        py="5px">
        <Link to="/home">
          <Image cursor="pointer" width="20px" src={arrow} />
        </Link>
        <Text fontSize="18px">✨ Stella Audhina ✨</Text>
      </Box>
      <Box position="relative" display="flex" flexDirection="column" gap="8px">
        <ProfileItem onOpen={onOpen} height="100px" />
        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Box>
      <TabElement />
    </Box>
  );
}
