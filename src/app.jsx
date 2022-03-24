import React from "react";

import { CssBaseline, Box } from "@mui/material";

import { Header } from "./widgets/header";
import { Footer } from "./widgets/footer";

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Header />
        <Footer />
      </Box>
    </React.Fragment>
  );
};
