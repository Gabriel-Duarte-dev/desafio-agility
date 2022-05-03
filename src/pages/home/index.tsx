import { Box, Flex } from "@chakra-ui/react";
import { Maps } from "../../components/maps";
import { Sidebar } from "../../components/sidebar";

function Home(): JSX.Element {
  return (
    <Flex w="100%" h="100%" justify="space-between">
      <Sidebar />
      <Maps />
    </Flex>
  );
}

export default Home;
