import withLayoutMain from "@/libs/components/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  console.log("Home");

  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
    </>
  );
};

export default withLayoutMain(Home);
