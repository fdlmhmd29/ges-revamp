import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import Video from "../components/Video";

const ShowCase = () => {
  return (
    <Box id="about-container" as={"section"} sx={styles.container}>
      <Container>
        <Box
          as={"div"}
          sx={{
            display: "grid",
            columnGap: "8rem",
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
    </Box>
  );
};

const styles = {
  container: {
    pt: "5rem !important",
    background: "rgb(244,240,255)",
    background: "rgb(244,240,255)",
    background:
      "-moz-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
  },
};

export default ShowCase;
