import React from "react";
import { Box, Container } from "theme-ui";
import Info from "./subsection/About/Info";
import Video from "./subsection/About/Video";

const ShowCase = () => {
  return (
    <Container as={"section"} id={"about"}>
      <Box
        as={"div"}
        sx={{
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "calc(100vh - 120px)",
          maxHeight: "600px",
          alignItems: "center",
        }}
      >
        <Video />
        <Info />
      </Box>
    </Container>
  );
};

export default ShowCase;
