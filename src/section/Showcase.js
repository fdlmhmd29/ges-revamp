import React from "react";
import { Box, Container } from "theme-ui";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

// Yellow
import { Info } from "../lib";
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
        <Image
          src={section1}
          alt={"Studi AMDAL"}
          loading={"lazy"}
          quality={100}
        />
      </Box>
    </Container>
  );
};

export default ShowCase;
