import React, { useContext, useEffect } from "react";
import { storeContext } from "../context/storeContext";

import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

import ShopCard from "../components/card/ShopCard";

function StoreItems() {
  const { items, basketItem } = useContext(storeContext);
  return (
    <>
      <Container sx={{ marginTop: "10px" }} maxWidth="xl">
        <Grid container spacing={2}>
          {items.map((data) => {
            return (
              <ShopCard key={data.id} data={data} basketItem={basketItem} />
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default StoreItems;
