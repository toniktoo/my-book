import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { CssBaseline, Box } from "@mui/material";

import { Header } from "./layouts/header";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Box>
      <Header />
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
