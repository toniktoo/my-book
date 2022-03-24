import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer fixed>
        <Typography variant="h1" fontSize="2rem">
          My book
        </Typography>
        <StyledAbout>
          <Button variant="outlined">sign-in</Button>
        </StyledAbout>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)`
  position: sticky;
  top: 0px;
  transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1100;
  backdrop-filter: blur(20px);
  box-shadow: rgb(19 47 76) 0px -1px 1px inset;
  background-color: rgba(10, 25, 41, 0.72);
  height: 65px;
  color: #66b2ff;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAbout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
