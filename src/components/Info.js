import React, { useState } from "react";
import { Box, Button, Heading, Text } from "theme-ui";
import { ModalProvider, Modal } from "./CTA";
import MoreLink from "./MoreLink";

import useTranslation from "next-translate/useTranslation";

function Info({ title, subtitle, text, variant, link, href }) {
  const { t } = useTranslation("common");
  const button = t("SCbutton");

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalProvider>
      <Box id="showcase__info" as={"div"}>
        <Box
          sx={{
            width: [null, null, null, null, null, "90%"],
            mb: "2rem !important",
          }}
        >
          <Heading id="title" as={"h3"} sx={{ variant: "text.heading.title" }}>
            {title}
          </Heading>
          <Heading
            id="subtitle"
            as={"h1"}
            sx={{ variant: "text.heading.subtitle" }}
          >
            {subtitle}
          </Heading>
          {text && (
            <Text id="caption" as={"p"} sx={{ variant: "text.caption.main" }}>
              {text}
            </Text>
          )}
        </Box>
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
