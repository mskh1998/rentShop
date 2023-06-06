import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useContext } from "react";

import { storeContext } from "../../context/storeContext";
// import ShopCard from "../card/ShopCard";

import "./css/modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  maxHeight: "100%",
  borderRadius: 1,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// function ChildModal({ data }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button onClick={handleOpen}>Edit</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style }}>
//           <ShopCard data={data} />
//           <Button onClick={handleClose}>Close</Button>
//         </Box>
//       </Modal>
//     </>
//   );
// }

export default function NestedModal() {
  const { open, removeFromBasket, handleClose, basketItem } =
    useContext(storeContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          {basketItem.map((data) => {
            return (
              <Card
                key={data.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {data.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      تعداد: {data.count}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {data.count * data.price}$
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                      maxHeight: "100vh",
                    }}
                  >
                    {/* <ChildModal data={data} /> */}
                    <Button
                      onClick={() => {
                        removeFromBasket(data);
                      }}
                      variant="outlined"
                      color="error"
                    >
                      حذف کامل
                    </Button>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={data.imgURl}
                  alt={data.name}
                />
              </Card>
            );
          })}
          <Button
            variant="contained"
            color="info"
            onClick={handleClose}
            sx={{ marginLeft: 1 }}
          >
            ثبت سفارش
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            بستن
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
