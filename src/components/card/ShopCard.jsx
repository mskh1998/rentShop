import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { storeContext } from "../../context/storeContext";

import "../../assets/css/shopCard.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
}));

function ShopCard({ data, basketItem }) {
  const { addToBasket, decreaseFromBasket, removeFromBasket } =
    useContext(storeContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let number = basketItem.find((itm) => itm.id === data.id)?.count;
    if (number !== undefined) {
      setQuantity(number);
    } else {
      setQuantity(0);
    }
  }, [basketItem]);

  return (
    <Grid key={data.id} item xs={12} sm={6} md={4} lg={3}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={data.imgURl}
            alt={data.name}
            sx={{ height: "400px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {quantity ? data.price * quantity : data.price}$
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {quantity !== 0 ? (
                <p>
                  {quantity} * {data.price}$
                </p>
              ) : (
                ""
              )}
            </Typography>
          </CardContent>
          <CardActions className="cardActionStyle">
            {quantity === 0 ? (
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  addToBasket(data);
                  setQuantity(quantity + 1);
                }}
              >
                افزودن
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    addToBasket(data);
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    decreaseFromBasket(data);
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    removeFromBasket(data);
                    setQuantity(0);
                  }}
                >
                  حذف کامل
                </Button>
              </>
            )}
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
}

export default ShopCard;
