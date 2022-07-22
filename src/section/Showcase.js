import React from "react";
import { Box, Container } from "theme-ui";
import Info from "../components/Info";
import ShowcaseImage from "../components/Image";

import useTranslation from "next-translate/useTranslation";

const ShowCase = () => {
  const { t, lang } = useTranslation("showcase");
  const title = t("title");
  const subtitle = t("subtitle");
  const text = t("text");

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
          <Info title={title} subtitle={subtitle} text={text} variant={"cta"} />
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
