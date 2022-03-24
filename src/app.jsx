import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { CssBaseline, Box, Modal } from "@mui/material";

import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import { ModalContainer } from "./features/modal";

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <BrowserRouter>
        <Box>
          <Header />
          <Footer />
          <ModalContainer />
        </Box>
      </BrowserRouter>
    </React.Fragment>
  );
};
