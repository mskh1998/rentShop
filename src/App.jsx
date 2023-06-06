import { useState, useEffect } from "react";
import { storeContext } from "./context/storeContext";

import "./App.css";

import RoutePage from "./Routes";

import Db from "./json-server/db.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [basketItem, setBasketItem] = useState([]);
  const [items, setItems] = useState(Db);
  const [counter, setCounter] = useState(0);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const counterEdit = (value) => {
    const temp = counter + value;

    setCounter(temp);
  };

  const addToBasket = async (data) => {
    const oldData = basketItem;

    const newProduct = {
      ...data,
      count: 1,
    };

    (await oldData.find((itm) => itm?.id === data.id))
      ? (await oldData.find((itm) => itm.id === data.id).count++) &&
        setBasketItem(oldData)
      : setBasketItem([...basketItem, newProduct]);
    counterEdit(1);
  };

  const decreaseFromBasket = async (data) => {
    const oldData = basketItem;

    (await oldData.find((itm) => itm?.id === data.id).count) !== 1
      ? (await oldData.find((itm) => itm.id === data.id).count--) &&
        setBasketItem(oldData)
      : setBasketItem(oldData.filter((itm) => itm.id !== data.id));

    counterEdit(-1);
  };

  const removeFromBasket = async (data) => {
    const oldData = basketItem;

    setBasketItem(oldData.filter((itm) => itm.id !== data.id));
    counterEdit(-oldData.find((itm) => itm.id === data.id).count);
  };

  return (
    <storeContext.Provider
      value={{
        items,
        open,
        setOpen,
        counter,
        handleOpen,
        handleClose,
        basketItem,
        addToBasket,
        decreaseFromBasket,
        removeFromBasket,
      }}
    >
      <RoutePage />
    </storeContext.Provider>
  );
}

export default App;
