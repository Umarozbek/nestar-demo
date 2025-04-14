import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("Community propertyList page");

  const [title, setTitle] = useState("hello");

  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Property List</Stack>
    </div>
  );
};

export default withLayoutBasic(Community);
