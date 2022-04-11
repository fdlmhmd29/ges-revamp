import React from "react"
import { Box, Button, Heading, Text, Link } from "theme-ui"

const Info = () => {
  return (
    <Box id="showcase__info" as={"div"}>
      <Heading id="showcase__title" as={"h3"} sx={styles.h3}>
        PT. Greenfield Environment Solution
      </Heading>
      <Heading id="showcase__subtitle" as={"h1"} sx={styles.h1}>
        Layanan Konsultasi Lingkungan
      </Heading>
      <Text id="showcase__caption" as={"p"} sx={styles.p}>
        Agensi konsultasi terbaik dan profesional dengan metode yang tepat,
        efisien dan efektif dari berbagai aspek adalah pondasi utama perusahaan
      </Text>
      <Box id="showcase__cta" as={"div"} sx={styles.cta}>
        <Link href="mailto:pt.greenfield@gmail.com">
          <Button id="showcase__cta-button" as={"button"} variant={"primary"}>
            Hubungi Kami
          </Button>
        </Link>
        <Link href="mailto:alpanumerik1@gmail.com">Unduh Profil</Link>
      </Box>
    </Box>
  )
}

const styles = {
  h3: {
    color: "title",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    borderLeft: "3px solid hsl(42, 92%, 52%)",
    padding: "0.13rem 0.75rem",
    marginBottom: "1rem",
    fontWeight: 500,
  },

  h1: {
    color: "subtitle",
    fontSize: "3rem",
    fontWeight: 500,
    lineHeight: "1.3",
  },

  p: {
    color: "text",
    fontSize: "0.9rem",
    lineHeight: "2",
    margin: "2rem 0",
  },

  cta: {
    display: "flex",
    alignItems: "center",

    button: {
      marginRight: "1.5rem",
    },
  },
}

export default Info
