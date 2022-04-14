import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import Video from "../components/Video";

const ShowCase = () => {
  return (
    <Container as={"section"} id={"about"} variant={"section.secondary"}>
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
            "PT. Greenfield Environment Solution berkomitmen untuk memberikan Layanan dan Jasa konsultasi lingkungan hidup profesional terbaik dengan metode yang tepat, efisien dan efektif dari berbagai aspek yang merupakan pondasi utama perusahaan kami."
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
