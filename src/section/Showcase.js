import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import ShowcaseImage from "../components/Image";

const ShowCase = () => {
  return (
    <Box id="showcase-container" as={"section"} sx={styles.container}>
      <Container className={"showcase"}>
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
          <Info
            title={"Penyedia jasa pengurusan"}
            subtitle={"Layanan Konsultasi Lingkungan 🌲🌳"}
            text={
              "Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, kami akan membantu Anda untuk menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis."
            }
            variant={"cta"}
          />
          <ShowcaseImage />
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  container: {
    pt: "8rem !important",
    pb: "5rem !important",
  },
};

export default ShowCase;
