import { Button } from "@chakra-ui/react";

export default function ButtonDisabled() {
  return (
    <Button
      isDisabled
      rounded="full"
      fontSize="15px"
      height="fit-content"
      backgroundColor="primary.disable"
      _hover={{ bg: "primary.disable" }}
      py="5px"
      color="white">
      Post
    </Button>
  );
}
