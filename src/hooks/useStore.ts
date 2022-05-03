import { StoreDTO } from "./../context/index";
const useStore = (stores: StoreDTO[] | []) => {
  let biggerAmout = 0;
  if (stores.length == 0 || stores.length == 1) biggerAmout = 0;
  else {
    biggerAmout = 0;
    stores.map((store, index) => {
      if (store.amount > stores[biggerAmout].amount) biggerAmout = index;
    });
  }
  return { biggerAmout };
};

export { useStore };
