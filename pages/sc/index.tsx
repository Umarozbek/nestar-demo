import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const CS: NextPage = () => {
  console.log("CS page");

  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">CS </Stack>
    </div>
  );
};

export default withLayoutBasic(CS);
