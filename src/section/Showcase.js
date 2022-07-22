import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import ShowcaseImage from "../components/Image";
import { useRouter } from "next/router";

const ShowCase = () => {
  let router = useRouter();
  let text =
    router.locale === "ind"
      ? "Layanan Konsultasi Lingkungan 🌲🌳"
      : router.locale === "en"
      ? "Environmental Consulting Service"
      : null;

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
            subtitle={text}
            text={
              "Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia, Greenfield Environment Solution akan membantu Anda untuk menerbitkan izin lingkungan hidup dengan mudah dan praktis."
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
