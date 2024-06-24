import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Button, Typography } from "@mui/material";
import { grayColor } from "../constants/color";
import { CurveButton } from "../components/styles/StyledComponents";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>

      <CurveButton   textAlign={"center"}  sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:"11rem",
        fontSize:"1.5rem",
        display: { xs: "none", sm: "block" },
      }} >  Founder of TalkSphere - Nazim </CurveButton>

      {/* <Button variant="contained">Founder - Nazim</Button> */}
    </Box>
  );
};

export default AppLayout()(Home);
