import { Button } from "@chakra-ui/react";

export default function ButtonActive() {
  return (
    <Button
      rounded="full"
      fontSize="15px"
      height="fit-content"
      bg="primary.active"
      _hover={{ bg: "primary.disable" }}
      py="5px"
      color="white">
      Post
    </Button>
  );
}
