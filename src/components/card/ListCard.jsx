import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

import "./listCard.css";

function ListCard({ data }) {
  const [fav, setFav] = useState(false);
  return (
    <>
      <div className="cardStyle" key={data.id}>
        <span>
          <img className="cardImage" src={data.imgUrl} alt={data.name} />
        </span>
        <span>
          <b>{data.name}</b>
          <p>{data.location}</p>
        </span>
        <span className="d-flex justify-content-between">
          <span className="price">
            {data.price}/{data.type}
          </span>
          <span>
            <Button
              size="small"
              variant="filled"
              onClick={() => setFav(!fav)}
              sx={{
                minWidth: "30px",
                height: "30px",
                padding: "0px",
                borderRadius: "50%",
                backgroundColor: "#CF3B4AB2",
                color: "#CF3B4A",
              }}
            >
              {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
          </span>
        </span>
      </div>
    </>
  );
}

export default ListCard;
