import {
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MainContext from "../../context";
import { RegisterStoreModal } from "../registerStoreModal";

export function Sidebar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { storeList, setPosition } = useContext(MainContext);
  const MotionLi = motion(ListItem);
  return (
    <Flex direction="column" bg="#5e3182" w="400px" h="100%" p="20px 10px">
      <Heading alignSelf="center" size="2xl" color="#fff" mt={10} mb={10}>
        Agility
      </Heading>

      <Button
        alignSelf="center"
        w="85%"
        color="#fff"
        borderColor="#fe4a0f"
        _hover={{ bg: "#fe4a0f" }}
        _active={{ bg: "#fe4a0f" }}
        _focus={{ borderColor: "#fe4a0f" }}
        variant="outline"
        leftIcon={<AiOutlineShoppingCart />}
        mb={20}
        onClick={onOpen}
      >
        NOVA LOJA
      </Button>

      <UnorderedList m={0} listStyleType="none" color="#fff" fontSize="24px">
        <AnimatePresence initial={false}>
          {storeList.map((store, index) => {
            return (
              <MotionLi
                key={index}
                mb={3}
                cursor="pointer"
                _hover={{ textDecoration: "underline #fff solid 1px" }}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.05,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                custom={index}
                onClick={() => setPosition({ lat: store.lat, lng: store.long })}
              >
                {store.storeName}
              </MotionLi>
            );
          })}
        </AnimatePresence>
      </UnorderedList>

      <RegisterStoreModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
