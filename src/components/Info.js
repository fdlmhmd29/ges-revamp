import React from "react";
import { Box, Heading, Text } from "theme-ui";
import MoreLink from "./MoreLink";

const Info = (props) => {
  return (
    <Box id="showcase__info" as={"div"}>
      <Heading id="showcase__title" as={"h3"} variant={"heading_primary"}>
        {props.title}
      </Heading>
      <Heading id="showcase__subtitle" as={"h1"} variant={"heading_secondary"}>
        {props.subtitle}
      </Heading>
      <Text id="showcase__caption" as={"p"} variant={"heading_paragraph"}>
        {props.text}
      </Text>
      <Box id="showcase__cta" as={"div"} sx={styles.cta}>
        <MoreLink href={props.href} text={props.link} variant={props.variant} />
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
