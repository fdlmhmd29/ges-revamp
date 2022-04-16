import React, { useState } from "react";
import { Box, Button } from "theme-ui";
import { UilPlay } from "@iconscout/react-unicons";
import { keyframes } from "@emotion/react";
import Image from "next/image";

//Yellow
import section2 from "../../public/assets/svg/section2.svg";
import Modal, { CloseButton } from "./Modal";
import ResponsiveIframe from "./ResponsiveIframe";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <Box className={"showcase__image"} as={"div"} sx={styles.thumbnail}>
      <Image
        src={section2}
        alt={"Studi AMDAL"}
        loading={"lazy"}
        quality={100}
      />

      <Button
        sx={styles.videoBtn}
        onClick={handleClick}
        aria-label="Play Button"
      >
        <span>
          <UilPlay size={50} />
        </span>
      </Button>
      <Modal isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)} size="24px" />
        <ResponsiveIframe
          src="https://www.youtube.com/embed/5K-jSaZmlGI"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Company Profile PT Greenfield Environment Solution 2022"
        />
      </Modal>
    </Box>
  );
};

const playPulse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  thumbnail: {
    justifyContent: "flex-start",
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },

  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "secondary",
      borderRadius: "50%",
      animation: `${playPulse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },

    "&:hover": { backgroundColor: "transparent" },

    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },

  videoWrapper: {
    maxWidth: "100%",
    position: "relative",
    width: "900px",
    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%",
    },
  },
};

export default Video;
