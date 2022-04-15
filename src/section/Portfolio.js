import { Box, Card, Container, Flex, Grid, Heading, Link } from "theme-ui";
import Image from "next/image";
import { UilEye, UilLinkAlt } from "@iconscout/react-unicons";

//Yellow
import Button from "../components/Button";
import Buttons from "./data/Portfolio";
import Cards from "./data/CardData";
import MoreLink from "../components/MoreLink";

const Portfolio = () => (
  <Container id={"portfolio-section"} as={"section"} sx={{ py: "1.875rem" }}>
    <Box id={"portfolio-container"} as={"div"}>
      <Flex
        id={"portfolio-header"}
        as={"div"}
        sx={{
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "4rem",
        }}
      >
        <Box id={"portfolio-title"} as={"div"} sx={{ paddingBottom: "1rem" }}>
          <Heading
            id={"portfolio-subheading"}
            as={"h3"}
            variant={"heading_primary"}
          >
            Subheading
          </Heading>
          <Heading id={"subtitle"} as={"h1"} variant={"heading_secondary"}>
            Heading
          </Heading>
        </Box>

        <Box id={"portfolio-filter-button-container"}>
          {Buttons.map((item) => (
            <Button
              key={item.id}
              id={item.id}
              variant={"filter"}
              text={item.text}
            />
          ))}
        </Box>
      </Flex>

      <Grid
        id={"portfolio-gallery"}
        as={"div"}
        gap={3}
        sx={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {Cards.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
              overflow: "hidden",
              backgroundColor: "white",
              height: "265px",
              display: "grid",
              gridTemplateRows: "1fr auto",
            }}
          >
            <Box as={"div"} sx={styles.image}>
              <Image src={item.image} alt={item.id} className={"card-image"} />
              <Flex as={"div"} id={"overlay"} sx={styles.overlay}>
                <Flex as={"span"} id={"icons"} sx={styles.icons}>
                  <UilEye size={25} />
                </Flex>
                <Link as={"a"} href={"/"} id={"icons"} sx={styles.icons}>
                  <UilLinkAlt size={25} />
                </Link>
              </Flex>
            </Box>
            <Flex
              sx={{ padding: "1.1rem 1.6rem", justifyContent: "space-between" }}
            >
              <Heading
                as={"h3"}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textTransform: "capitalized",
                }}
              >
                {item.heading}
              </Heading>
              <MoreLink href={item.href} variant={"more"} text={item.text} />
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  </Container>
);

const styles = {
  icons: {
    cursor: "pointer",
    color: "white",
    fontSize: "1.1rem",
    margin: "0 0.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transform: "translateY(15px)",
    transition: "0.3s",

    "&:hover": {
      color: "primary",
    },
  },

  image: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",

    "&:hover": {
      "#icons": {
        opacity: 1,
        transform: "translateY(0px)",
      },
    },
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    backdropFilter: "blur(0px)",
    justifyContent: "center",
    alignItems: "center",
    pointerevents: "none",
    transition: "0.3s",

    "&:hover": {
      pointerevents: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(10px)",
    },
  },
};

export default Portfolio;
