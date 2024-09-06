import { Box, Image, Text } from "@chakra-ui/react";
import arrow from "@/assets/content/status/Line arrow-left.svg";
import DetailStatus from "./detail-status";
import UpdateStatus from "../../features/update-status";
import Posted from "../../features/posted";

export default function Status() {
  return (
    <>
      <Box display="flex" gap="10px" px="20px" py="5px">
        <Image cursor="pointer" width="20px" src={arrow} />
        <Text fontSize="18px">Status</Text>
      </Box>
      <DetailStatus />
      <UpdateStatus placeholder="Type your reply!" button="Reply" />
      <Posted
        author="Indah Pra Karya"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod
      porro maiores corporis ad consequatur fuga id quae! Dignissimos,
      perferendis pariatur."
      />
      <Posted
        author="Indah Pra Karya"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod
      porro maiores corporis ad consequatur fuga id quae! Dignissimos,
      perferendis pariatur."
      />
      <Posted
        author="Indah Pra Karya"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod
      porro maiores corporis ad consequatur fuga id quae! Dignissimos,
      perferendis pariatur."
      />
      <Posted
        author="Indah Pra Karya"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quod
      porro maiores corporis ad consequatur fuga id quae! Dignissimos,
      perferendis pariatur."
      />
    </>
  );
}
