import { Box, Image, Text } from "@chakra-ui/react";
import arrow from "@/assets/content/status/Line arrow-left.svg";
import ProfileItem from "@/features/profile";
import TabElement from "@/features/tabs";

export default function Profile() {
  return (
    <Box display="flex" flexDirection="column" px="20px" gap="8px">
      <Box display="flex" gap="10px" py="5px">
        <Image cursor="pointer" width="20px" src={arrow} />
        <Text fontSize="18px">✨ Stella Audhina ✨</Text>
      </Box>
      <ProfileItem height="100px" />
      <TabElement />
    </Box>
  );
}
