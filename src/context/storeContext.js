import { createContext } from "react";

export const storeContext = createContext({
  counter: 0,
  open: false,
  items: [],
  basketItem: [],
  handleOpen: () => {},
  handleClose: () => {},
  addToBasket: () => {},
  decreaseFromBasket: () => {},
  removeFromBasket: () => {},
});
