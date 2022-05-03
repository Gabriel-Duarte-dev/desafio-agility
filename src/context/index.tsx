import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface StoreDTO {
  storeName: string;
  city: string;
  lat: number;
  long: number;
  amount: number;
}

interface PositionProps {
  lat: number;
  lng: number;
}

interface MainContextProps {
  storeList: StoreDTO[] | [];
  setStoreList: Dispatch<SetStateAction<[] | StoreDTO[]>>;
  position: PositionProps;
  setPosition: Dispatch<SetStateAction<PositionProps>>;
}

const DEFAULT_VALUE = {
  storeList: [],
  setStoreList: () => {},
  position: { lat: -8.564359686203947, lng: -55.76969748917611 },
  setPosition: () => {},
};

const MainContext = createContext<MainContextProps>(DEFAULT_VALUE);

const MainContextProvider = ({ children }: any): JSX.Element => {
  const [storeList, setStoreList] = useState<StoreDTO[] | []>(
    DEFAULT_VALUE.storeList
  );
  const [position, setPosition] = useState(DEFAULT_VALUE.position);

  return (
    <MainContext.Provider
      value={{
        storeList,
        setStoreList,
        position,
        setPosition,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
