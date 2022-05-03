import {
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import MainContext, { StoreDTO } from "../../context";

type RegisterStoreModalProps = {
  isOpen: boolean;
  onClose: () => void;
  size?: string;
};

export function RegisterStoreModal({
  isOpen,
  onClose,
  size,
}: RegisterStoreModalProps): JSX.Element {
  const { storeList, setStoreList, setPosition } = useContext(MainContext);
  const [newStore, setNewStore] = useState<StoreDTO>({
    storeName: "",
    city: "",
    lat: 0,
    long: 0,
    amount: 0,
  });

  const addNewStore = () => {
    setStoreList([...storeList, newStore]);
    onClose();
    setPosition({
      lat: newStore.lat,
      lng: newStore.long,
    });
    setNewStore({
      storeName: "",
      city: "",
      lat: 0,
      long: 0,
      amount: 0,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar nova loja</ModalHeader>
        <ModalCloseButton />
        <ModalBody w="100%">
          <Flex w="100%" direction="column" align="center">
            <FormControl w="100%" isRequired>
              <Flex mb={5} w="100%">
                <Input
                  isRequired
                  type="text"
                  mr={2}
                  placeholder="Nome da Loja"
                  w="48%"
                  onChange={(e) => {
                    setNewStore((prevState) => ({
                      ...prevState,
                      storeName: e.target.value,
                    }));
                  }}
                />
                <Input
                  isRequired
                  type="text"
                  placeholder="Cidade"
                  w="48%"
                  onChange={(e) => {
                    setNewStore((prevState) => ({
                      ...prevState,
                      city: e.target.value,
                    }));
                  }}
                />
              </Flex>
              <Flex mb={5} w="100%">
                <Input
                  isRequired
                  type="number"
                  mr={2}
                  placeholder="Latitude"
                  w="48%"
                  onChange={(e) => {
                    setNewStore((prevState) => ({
                      ...prevState,
                      lat: parseFloat(e.target.value),
                    }));
                  }}
                />
                <Input
                  isRequired
                  type="number"
                  placeholder="Longitude"
                  w="48%"
                  onChange={(e) => {
                    setNewStore((prevState) => ({
                      ...prevState,
                      long: parseFloat(e.target.value),
                    }));
                  }}
                />
              </Flex>
              <Input
                isRequired
                type="number"
                placeholder="Montante do Mês"
                w="100%"
                onChange={(e) => {
                  setNewStore((prevState) => ({
                    ...prevState,
                    amount: parseFloat(e.target.value),
                  }));
                }}
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={addNewStore}>
            Cadastrar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
