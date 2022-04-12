import React from "react";
import {Box, Container} from "theme-ui";
import Info from "./subsection/ShowCase/Info";
import ShowcaseImage from "./subsection/ShowCase/Image";

const ShowCase = () => {
  return (
    <Container as={"section"} id={"showcase"}>
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
        <Info/>
        <ShowcaseImage/>
      </Box>
    </Container>
  );
};

export default ShowCase;
