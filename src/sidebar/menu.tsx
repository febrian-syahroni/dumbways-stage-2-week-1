import { Box, Button } from "@chakra-ui/react";
import home from "@/assets/sidebar/home.svg";
import userSearch from "@/assets/sidebar/user-search.svg";
import heart from "@/assets/sidebar/heart.svg";
import userProfile from "@/assets/sidebar/profile-circle.svg";
import Items from "./items";

export default function Menu() {
  return (
    <Box display="flex" width="full" flexDirection="column" gap="8px">
      <Items src={home} title="Home" />
      <Items src={userSearch} title="Search" />
      <Items src={heart} title="Follows" />
      <Items src={userProfile} title="Profile" />
      <Button
        fontSize="15px"
        _hover={{ backgroundColor: "primary.disable" }}
        color="white"
        backgroundColor="primary.active"
        rounded="full">
        Create Post
      </Button>
    </Box>
  );
}
