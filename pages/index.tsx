import type { NextPage } from "next";

import NowPlaying from "../components/NowPlaying";
import Box from "@mui/material/Box";

import { ButtonBase, Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <NowPlaying />
      </Box>
    </Container>
  );
};

export default Home;
