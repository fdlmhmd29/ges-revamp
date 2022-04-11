import React from "react"
import { Box, Container } from "theme-ui"
import Info from "./subsection/ShowCase/Info"

const ShowCase = () => {
  return (
    <Container>
      <Box
        id="showcase-container"
        as={"div"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "calc(100vh - 120px)",
          maxHeight: "600px",
          alignItems: "center",
        }}
      >
        <Info />
      </Box>
    </Container>
  )
}

export default ShowCase
