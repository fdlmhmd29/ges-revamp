import { Box, Flex, Heading, Link, Text } from "theme-ui";
import Image from "next/image";

//Yellow
import MoreLink from "./MoreLink";
import { number } from "prop-types";

const SolutionCard = ({
  icon = "",
  href = "",
  heading = "",
  id = number,
  link = "",
  alt = "",
  className = "",
}) => (
  <Link as={"a"} href={href} sx={styles.card} id={id} className={className}>
    <Flex as={"div"} sx={styles.left} className="left">
      <Heading as={"h4"} sx={styles.cardHeading}>
        {heading}
      </Heading>
      <MoreLink href={link} text={"Selengkapnya"} variant={"card"} />
    </Flex>
    <Box as={"div"} sx={styles.right} className="right">
      <Image src={icon} width={100} height={100} loading={"lazy"} alt={alt} />
    </Box>
  </Link>
);

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.04)",
    },
  },

  left: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
    overflow: "hidden",
    p: "20px",
  },

  right: {
    py: "20px",
    pr: "20px",
  },

  cardHeading: {
    color: "text",
    fontSize: "0.875rem",
    pb: "10px",
  },
};

export default SolutionCard;
