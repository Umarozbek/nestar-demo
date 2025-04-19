import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>COMMUNITY Mobile</Stack>;
  } else {
    
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Property List</Stack>
    </div>
  );
}
};

export default withLayoutBasic(Community);
