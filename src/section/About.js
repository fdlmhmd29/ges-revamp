import React from "react";
import { Box, Container } from "theme-ui";

// Yellow
import { Video, Info } from "../lib";

const ShowCase = () => {
  return (
    <Box
      id="about-container"
      as={"section"}
      sx={{ variant: "box.background.secondary" }}
    >
      <Container sx={{ variant: "layout.container.about" }}>
        <Box
          id="info-container__about"
          sx={{
            variant: "box.top",
          }}
        >
          <Info
            title={"Sekilas Tentang Kami"}
            subtitle={"PT Greenfield Environment Solution"}
            text={
              "PT. Greenfield Environment Solution berkomitmen untuk memberikan Layanan dan Jasa konsultasi lingkungan hidup profesional terbaik dengan metode yang tepat, efisien dan efektif dari berbagai aspek yang merupakan pondasi utama perusahaan kami."
            }
            href={"/"}
            variant={"more"}
            link={"Selengkapnya"}
          />
        </Box>
        <Box id="video-container__about" sx={{ variant: "box.bottom" }}>
          <Video />
        </Box>
      </Container>
    </Box>
  );
};

export default ShowCase;
