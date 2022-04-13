import { Box, Heading, Link, Text } from "theme-ui";
import Image from "next/image";

//Yellow
import MoreLink from "./MoreLink";

const Card = ({ icon, href, heading, text, link, alt }) => (
  <Link as={"a"} href={href} sx={styles.card}>
    <Box as={"div"} id={"card-body"} sx={{ padding: "24px" }}>
      <Image src={icon} width={100} height={100} loading={"lazy"} alt={alt} />
      <Heading as={"h4"} sx={{ pb: "12px", pt: "12px", color: "text" }}>
        {heading}
      </Heading>
      <Text as={"p"} sx={{ color: "text", fontSize: "0.875rem" }}>
        {text}
      </Text>
    </Box>
    <Box as={"div"} sx={{ px: "24px", pt: null, pb: "16px" }}>
      <MoreLink href={link} text={"Selengkapnya"} variant={"more"} />
    </Box>
  </Link>
);

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "hsl(43, 100%, 95%)",
    },
  },
};

export default Card;