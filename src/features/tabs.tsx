import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Posted from "@/features/posted";

export default function TabElement() {
  return (
    <Tabs isFitted variant="unstyled">
      <TabList borderBottom="1px" borderColor="secondary">
        <Tab
          fontSize="14px"
          _selected={{
            color: "white",
            borderBottom: "1px",
            borderColor: "primary.active",
          }}>
          All Post
        </Tab>
        <Tab
          fontSize="14px"
          _selected={{
            color: "white",
            borderBottom: "1px",
            borderColor: "primary.active",
          }}>
          Media
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel display="flex" flexDirection="column" gap="18px" px={0}>
          <Posted
            author="✨ Stella Audhina ✨"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. In natoque ultrices imperdiet vel convallis accumsan donec. Phasellus neque finibus neque nibh feugiat orci quisque."
            borderTop="0"
            padding="0"
          />
          <Posted
            author="✨ Stella Audhina ✨"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. In natoque ultrices imperdiet vel convallis accumsan donec. Phasellus neque finibus neque nibh feugiat orci quisque."
            borderTop="0"
            padding="0"
          />
          <Posted
            author="✨ Stella Audhina ✨"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit. In natoque ultrices imperdiet vel convallis accumsan donec. Phasellus neque finibus neque nibh feugiat orci quisque."
            borderTop="0"
            padding="0"
          />
        </TabPanel>
        <TabPanel display="flex" flexWrap="wrap" gap="18px" px={0}>
          <Image
            boxSize="40%"
            src="https://th.bing.com/th/id/OIP.dsiC7a1xQd-CPZpBuMeCDgAAAA?w=244&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Image
            boxSize="40%"
            src="https://th.bing.com/th/id/OIP.dsiC7a1xQd-CPZpBuMeCDgAAAA?w=244&h=180&c=7&r=0&o=5&pid=1.7"
          />
          <Image
            boxSize="40%"
            src="https://th.bing.com/th/id/OIP.dsiC7a1xQd-CPZpBuMeCDgAAAA?w=244&h=180&c=7&r=0&o=5&pid=1.7"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
