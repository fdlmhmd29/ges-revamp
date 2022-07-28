import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "theme-ui";
import Image from "next/image";
import { UilEye, UilLinkAlt } from "@iconscout/react-unicons";
import moment from "moment";

//Yellow
import { MoreLink, SectionHeader } from "../lib";

const Portfolio = ({ posts, prevPorto, nextPorto }) => {
  const isLocal = process.env.NODE_ENV === "development";

  return (
    <Box id={"portfolio-section"} as={"section"} sx={styles.container}>
      <Container>
        <Box id={"portfolio-container"} as={"div"}>
          <SectionHeader
            title={"Portofolio"}
            slogan={"Cerita kami bersama klien"}
          />
          <Grid
            id={"portfolio-gallery"}
            as={"div"}
            gap={3}
            sx={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {posts &&
              posts
                .filter((item) => {
                  return isLocal || !item.draft;
                })
                .map((item) => (
                  <Card
                    key={item.id}
                    className={item.classes}
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
                    {item.coverImage && (
                      <Box as={"div"} sx={styles.image} key={item.id}>
                        <Image
                          height={600}
                          width={item.coverImageWidth}
                          src={item.coverImage}
                          alt={item.coverImageAlt || "Gambar Portofolio"}
                          className={"card-image"}
                        />
                        <Flex as={"div"} id={"overlay"} sx={styles.overlay}>
                          <Flex as={"span"} id={"icons"} sx={styles.icons}>
                            <UilEye size={25} />
                          </Flex>
                          <Link
                            as={"a"}
                            href={"/" + item.slug}
                            id={"icons"}
                            sx={styles.icons}
                          >
                            <UilLinkAlt size={25} />
                          </Link>
                        </Flex>
                      </Box>
                    )}

                    <Flex
                      sx={{
                        padding: "1.1rem 1.6rem",
                        alignContent: "center",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Heading
                        as={"h3"}
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "capitalized",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: "#3f454b",
                        }}
                      >
                        <Link href={"/" + item.slug} passHref>
                          {item.title}
                        </Link>
                      </Heading>
                      <Box>
                        <Text
                          as={"p"}
                          sx={{ fontSize: [0, null, "0.85rem"], color: "text" }}
                        >
                          {moment(item.date).format("DD MMMM, YYYY")}
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                ))}
          </Grid>
          <Flex
            sx={{
              justifyContent: "center",
              justifyItems: "center",
              mt: "3rem",
            }}
          >
            <MoreLink href={"/"} text={"Lihat Semua"} variant="more" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  container: {
    py: "5rem !important",
    background: "rgb(244,240,255)",
    background:
      "-moz-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(180deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
  },
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
