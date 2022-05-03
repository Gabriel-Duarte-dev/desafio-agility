import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function FormLogin(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Flex direction="column" justify="center" align="center">
      <Heading mb={10} color="#fff">
        Agility Frotas
      </Heading>

      <FormControl>
        <FormLabel color="#fff" htmlFor="email">
          Email address
        </FormLabel>
        <Input
          focusBorderColor="#5e3182"
          color="#fff"
          id="email"
          type="email"
          mb={5}
        />

        <FormLabel color="#fff" htmlFor="password">
          Senha
        </FormLabel>
        <Input
          focusBorderColor="#5e3182"
          color="#fff"
          id="password"
          type="password"
        />

        <Button
          color="#5e3182"
          fontWeight="bold"
          _hover={{ bg: "#5e3182", color: "#fff" }}
          w="100%"
          mt={10}
          onClick={() => navigate("/home")}
        >
          LOGIN
        </Button>
      </FormControl>
    </Flex>
  );
}
