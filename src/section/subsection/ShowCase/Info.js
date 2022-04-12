import React from "react";
import { Box, Button, Heading, Link, Text } from "theme-ui";

const Info = () => {
  return (
    <Box id="showcase__info" as={"div"}>
      <Heading id="showcase__title" as={"h3"} variant={"heading_primary"}>
        Penyedia jasa pengurusan
      </Heading>
      <Heading id="showcase__subtitle" as={"h1"} variant={"heading_secondary"}>
        Layanan Konsultasi Lingkungan
      </Heading>
      <Text id="showcase__caption" as={"p"} variant={"heading_paragraph"}>
        Bekerjasama dengan{" "}
        <strong>
          Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia
        </strong>
        , kami akan membantu Anda untuk menerbitkan Izin Lingkungan suatu
        bangunan dengan mudah dan praktis.
      </Text>
      <Box id="showcase__cta" as={"div"} sx={styles.cta}>
        <Link href="mailto:pt.greenfield@gmail.com" as={"a"}>
          <Button
            id="showcase__cta-primary-button"
            as={"button"}
            variant={"primary"}
          >
            Hubungi Kami
          </Button>
        </Link>
        <Link
          download={true}
          href="https://ik.imagekit.io/lgntlo62o6w/Profile.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1649681210048"
          as={"a"}
        >
          <Button
            id="showcase__cta-secondary-button"
            as={"button"}
            variant={"secondary"}
          >
            Unduh Profil
          </Button>
        </Link>
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
