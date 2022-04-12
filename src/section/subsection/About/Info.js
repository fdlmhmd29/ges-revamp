import React from "react";
import { Box, Heading, Text } from "theme-ui";
import MoreLink from "../../../components/MoreLink";

const Info = () => {
  return (
    <Box id="showcase__info" as={"div"}>
      <Heading id="showcase__title" as={"h3"} variant={"heading_primary"}>
        Tentang kami
      </Heading>
      <Heading id="showcase__subtitle" as={"h1"} variant={"heading_secondary"}>
        PT Greenfield Environment Solution
      </Heading>
      <Text id="showcase__caption" as={"p"} variant={"heading_paragraph"}>
        Kami berkomitmen untuk memberikan{" "}
        <strong>
          {" "}
          jasa pelayanan pengurusan dan konsultasi lingkungan hidup profesional
        </strong>{" "}
        terbaik dengan metode yang
        <strong> tepat, efisien dan efektif</strong> dari berbagai aspek yang
        merupakan pondasi utama perusahaan kami.
      </Text>
      <Box id="showcase__cta" as={"div"} sx={styles.cta}>
        <MoreLink href={"/"}>Selengkapnya</MoreLink>
      </Box>
    </Box>
  );
};

const styles = {
  cta: {
    display: "flex",
    alignItems: "center",

    button: {
      marginRight: "1.5rem",
    },
  },
};

export default Info;
