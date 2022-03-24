import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledAbout>
          <Typography variant="h3" fontSize="1rem">
            created by nv_tolmachev
          </Typography>
          <Typography variant="h4" fontSize="0.6rem">
            24.03.2022
          </Typography>
        </StyledAbout>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1100;
  backdrop-filter: blur(20px);
  box-shadow: rgb(19 47 76) 0px -1px 1px inset;
  height: 50px;
  color: #66b2ff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(194, 224, 255, 0.08);
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
