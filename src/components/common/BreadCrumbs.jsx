import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadCrumbs({ data }) {
  const breadcrumbs = [];

  data.map((x) => {
    breadcrumbs.push(
      <Link
        underline="hover"
        key={x.id}
        color="inherit"
        href={x.URL}
        onClick={handleClick}
      >
        {x.title}
      </Link>
    );
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowBackIosIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
