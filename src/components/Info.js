import React, { useState } from "react";
import { Box, Button, Heading, Text } from "theme-ui";
import { ModalProvider, Modal } from "./CTA";
import MoreLink from "./MoreLink";

import useTranslation from "next-translate/useTranslation";

function Info({ title, subtitle, text, variant, link, href }) {
  const { t, lang } = useTranslation("common");
  const button = t("SCbutton");

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalProvider>
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
          {link ? (
            <MoreLink href={href} text={link} variant={variant} />
          ) : (
            <Button type="button" onClick={() => setIsModalOpen(true)}>
              {button}
            </Button>
          )}
          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              Hubungi kami jfsjdfnjsd jdsnflkndlfka alnfka casnfa llsndklan
              alsdnlkas dla sdanldsnk sadlnj ad asdnaj clas ld asldljas lc as
              dla slndlas lcas lc al jld asd ljas dlas dlas djlasjldasjl l
            </Modal>
          )}
        </Box>
      </Box>
    </ModalProvider>
  );
}

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
