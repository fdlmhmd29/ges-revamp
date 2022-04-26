import React from "react";
import { Box, Heading, Text } from "theme-ui";
import MoreLink from "./MoreLink";

const Info = ({ title, subtitle, text, variant, link, href }) => {
  return (
    <Box id="showcase__info" as={"div"}>
      <Heading id="title" as={"h3"} variant={"heading_primary"}>
        {title}
      </Heading>
      <Heading id="subtitle" as={"h1"} variant={"heading_secondary"}>
        {subtitle}
      </Heading>
      {text && (
        <Text id="caption" as={"p"} variant={"heading_paragraph"}>
          {text}
        </Text>
      )}
      <Box id="showcase__cta" as={"div"} sx={styles.cta}>
        <MoreLink href={href} text={link} variant={variant} />
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
