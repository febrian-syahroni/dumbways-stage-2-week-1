import { Box, Image, Input } from "@chakra-ui/react";
import profile from "@/assets/user-search.svg";

export default function SearchItem() {
  return (
    <Box
      display="flex"
      gap="10px"
      mx="20px"
      rounded="full"
      px="20px"
      py="10px"
      backgroundColor="card">
      <Image src={profile} />
      <Input variant="unstyled" placeholder="Search your friend" />
    </Box>
  );
}
