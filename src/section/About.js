import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import Video from "../components/Video";

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
        <Info
          title={"Tentang Kami"}
          subtitle={"PT Greenfield Environment Solution"}
          text={
            "Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, kami akan membantu Anda untuk menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis."
          }
          href={"/"}
          variant={"more"}
          link={"Selengkapnya"}
        />
      </Box>
    </Container>
  );
};

export default ShowCase;
