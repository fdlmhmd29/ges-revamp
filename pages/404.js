import Image from "next/image";
import React from "react";
import { Box, Container, Flex, Link, Text } from "theme-ui";
import uc from "../public/assets/svg/UC.svg";
import config from "../blog.config";
import Wrapper from "../src/layout/Wrapper";

const PostsPage = ({ posts }) => (
  <Wrapper
    url={config.url}
    title={"Page under construction!"}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Container as={"main"} role={"main"}>
      <Flex sx={{ height: "100vh", pt: "13rem" }}>
        <Flex
          sx={{
            width: "100% !important",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Image src={uc} />
          </Box>
          <Box as={"nav"} aria-label="breadcrumb">
            <Flex
              as={"ol"}
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                listStyle: "none",
                mb: "1rem",
                backgroundColor: "transparent",
              }}
            >
              <Box as={"li"}>
                <Link href="/">Home</Link>
              </Box>
              <Box as={"li"}>
                <Link href="/">Under construction</Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  </Wrapper>
);

const styles = {};

export default PostsPage;
