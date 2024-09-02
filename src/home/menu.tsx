import { Box, Button } from "@chakra-ui/react";
import Items from "./items";
import home from "@/assets/sidebar/home.svg";
import userSearch from "@/assets/sidebar/user-search.svg";
import heart from "@/assets/sidebar/heart.svg";
import userProfile from "@/assets/sidebar/profile-circle.svg";

export default function Menu() {
  return (
    <Box display="flex" width="337px" flexDirection="column" gap="8px">
      <Items src={home} title="Home" />
      <Items src={userSearch} title="Search" />
      <Items src={heart} title="Follows" />
      <Items src={userProfile} title="Profile" />
      <Button
        fontSize="20px"
        fontWeight={700}
        _hover={{ backgroundColor: "primary.disable" }}
        color="white"
        h="52px"
        backgroundColor="primary.active"
        rounded="full">
        Create Post
      </Button>
    </Box>
  );
}
