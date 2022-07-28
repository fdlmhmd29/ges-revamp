import React from "react";
import { Box, Container } from "theme-ui";
import useTranslation from "next-translate/useTranslation";

// Yellow
import { Info, Images } from "../lib";
import { section1 } from "../lib/image";

const ShowCase = () => {
  const { t } = useTranslation("showcase");
  const title = t("title");
  const subtitle = t("subtitle");
  const text = t("text");

  return (
    <Container
      id={"showcase-section"}
      as={"section"}
      sx={{ variant: "layout.container.showcase" }}
    >
      <Box
        sx={{
          variant: "box.top",
        }}
      >
        <Info title={title} subtitle={subtitle} text={text} variant={"cta"} />
      </Box>
      <Box
        sx={{
          variant: "box.bottom",
        }}
      >
        <Images src={section1} />
      </Box>
    </Container>
  );
};

export default ShowCase;
