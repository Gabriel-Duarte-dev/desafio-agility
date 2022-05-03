import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { FormLogin } from "../../components/formLogin";

function Login(): JSX.Element {
  return (
    <Flex w="100%" h="100%">
      <Center w="65%" bg="#5e3182">
        <Image
          src="https://agilitymonitoramento.com.br/logo_da_empresa.png"
          w="200px"
          h="200px"
        />
      </Center>
      <Center
        w="35%"
        h="100%"
        bgImage="linear-gradient(to left bottom, #fe7d24, #fe721d, #fe6617, #fe5912, #fe4a0f)"
      >
        <FormLogin />
      </Center>
    </Flex>
  );
}

export default Login;
