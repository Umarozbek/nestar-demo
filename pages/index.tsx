import withLayoutMain from "@/libs/components/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  console.log("Home");

  return (
    <>
      <Stack>
        <Stack flexDirection={"column"}>
          <Box className="container">Popular Properties</Box>
          <Box className="container">Top agents</Box>
          <Box className="container">Top Properties</Box>
          <Box className="container">Events</Box>
        </Stack>
      </Stack>
    </>
  );
};
export default withLayoutMain(Home);
