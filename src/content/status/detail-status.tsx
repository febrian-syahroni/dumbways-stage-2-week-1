import heartFill from "@/assets/content/heart-fill.svg";
import textMessage from "@/assets/content/message-text.svg";
import heartOutline from "@/assets/content/heart-outline.svg";
import Avatar from "@/components/avatar";
import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function DetailStatus() {
  const [liked, setLiked] = useState<boolean>(false);

  function handleLiked() {
    setLiked((prev) => !prev);
  }

  return (
    <Box
      display="flex"
      borderBottom="1px"
      borderColor="secondary"
      fontSize="10px"
      padding="20px"
      flexDirection="column"
      gap="8px">
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar />
        <Box display="flex" flexDirection="column">
          <Text>Indah Pra Karya</Text>
          <Text color="gray">@indahpra</Text>
        </Box>
      </Box>
      <Text fontSize="15px" fontWeight="100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod
        porro maiores corporis ad consequatur fuga id quae! Dignissimos,
        perferendis pariatur.
      </Text>
      <Box display="flex" color="gray" gap="5px">
        <Text>11:32 PM</Text>.<Text>Jul 26, 2023</Text>
      </Box>
      <Box display="flex" gap="20px">
        <Box display="flex" gap="5px" alignItems="center">
          <Image
            onClick={handleLiked}
            cursor="pointer"
            src={liked ? heartFill : heartOutline}
          />
          <Text color="gray">36</Text>
        </Box>
        <Box display="flex" gap="5px" alignItems="center">
          <Image src={textMessage} />
          <Text color="gray">381</Text>
          <Text color="gray">Replies</Text>
        </Box>
      </Box>
    </Box>
  );
}
