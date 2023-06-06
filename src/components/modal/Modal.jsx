// import React, { useState } from "react";
// import {
//   MDBBtn,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalBody,
//   MDBModalFooter,
// } from "mdb-react-ui-kit";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// import { useContext } from "react";

// import { storeContext } from "../../context/storeContext";

// export default function App() {
//   const { open, setOpen, removeFromBasket, handleClose, basketItem } =
//     useContext(storeContext);

//   const toggleShow = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       <MDBModal show={open} setShow={setOpen} tabIndex="-1">
//         <MDBModalDialog>
//           <MDBModalContent>
//             <MDBModalHeader>
//               <MDBModalTitle>سبد خرید</MDBModalTitle>
//               <MDBBtn
//                 className="btn-close"
//                 color="none"
//                 onClick={toggleShow}
//               ></MDBBtn>
//             </MDBModalHeader>
//             <MDBModalBody>
//               {basketItem.map((data) => {
//                 return (
//                   <Card
//                     key={data.id}
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                       }}
//                     >
//                       <CardContent sx={{ flex: "1 0 auto" }}>
//                         <Typography component="div" variant="h5">
//                           {data.name}
//                         </Typography>
//                         <Typography
//                           variant="subtitle1"
//                           color="text.secondary"
//                           component="div"
//                         >
//                           numbers: {data.count}
//                         </Typography>
//                         <Typography variant="subtitle1" component="div">
//                           {data.count * data.price}$
//                         </Typography>
//                       </CardContent>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           pl: 1,
//                           pb: 1,
//                         }}
//                       >
//                         {/* <ChildModal data={data} /> */}
//                         <Button
//                           onClick={() => {
//                             removeFromBasket(data);
//                           }}
//                         >
//                           remove
//                         </Button>
//                       </Box>
//                     </Box>
//                     <CardMedia
//                       component="img"
//                       sx={{ width: 151 }}
//                       image={data.imgURl}
//                       alt={data.name}
//                     />
//                   </Card>
//                 );
//               })}
//             </MDBModalBody>

//             <MDBModalFooter>
//               <MDBBtn color="secondary" onClick={toggleShow}>
//                 Close
//               </MDBBtn>
//               <MDBBtn>Save changes</MDBBtn>
//             </MDBModalFooter>
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>
//     </>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useContext } from "react";

import { storeContext } from "../../context/storeContext";

export default function ScrollDialog() {
  const [scroll, setScroll] = React.useState("paper");

  const { open, setOpen, removeFromBasket, handleClose, basketItem } =
    useContext(storeContext);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">سبد خرید</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            بستن
          </Button>
          <Button
            sx={{ marginRight: 1 }}
            variant="contained"
            color="info"
            onClick={handleClose}
          >
            ثبت سفارش
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
