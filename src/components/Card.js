import { Box, Heading, Link, Text } from "theme-ui";
import Image from "next/image";

//Yellow
import MoreLink from "./MoreLink";
import { number } from "prop-types";

const Card = ({
  icon = "",
  href = "",
  heading = "",
  text = "",
  id = number,
  link = "",
  alt = "",
  className = "",
}) => (
  <Link as={"a"} href={href} sx={styles.card} className={className}>
    <Box
      sx={{
        display: text ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ pt: "24px", px: "24px", order: 1, pb: text ? "0px" : "24px" }}>
        <Image src={icon} width={100} height={100} loading={"lazy"} alt={alt} />
      </Box>
      <Box
        as={"div"}
        id={id}
        sx={{ px: "24px", pt: text ? "0px" : "24px", pb: "24px", order: 0 }}
      >
        <Heading
          as={"h4"}
          sx={{
            pb: text ? "15px" : null,
            color: "text",
            fontSize: "1rem",
            height: text ? "4.438rem" : "2rem",
          }}
        >
          {heading}
        </Heading>
        {text ? (
          <Text
            as={"p"}
            sx={{
              color: "text",
              fontSize: "0.875rem",
              pb: "15px",
              height: "6rem",
            }}
          >
            {text}
          </Text>
        ) : null}
        <Box as={"div"} sx={{ pr: "24px" }}>
          <MoreLink href={link} text={"Selengkapnya"} variant={"card"} />
        </Box>
      </Box>
    </Box>
  </Link>
);

const styles = {
  card: {
    maxHeight: "400px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.04)",
    },
  },
};

export default Card;
