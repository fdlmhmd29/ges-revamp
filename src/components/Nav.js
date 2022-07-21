import { Box, Container, Flex, Text } from "theme-ui";
import React, { useState, useEffect } from "react";
import { UilChat, UilEnglishToChinese } from "@iconscout/react-unicons";

// Yellow
import { ThemeToggle, Logo } from "../lib";
import Navbar from "./navbar/Navbar";
import theme from "../layout/Theme";
import { debounce } from "../utilities/debounce";

// inject inline styles on the body before the page is rendered to avoid the flash of light if we are in dark mode
let codeToRunOnClient = false;
if (theme.colors.modes && theme.colors.modes.length !== 0) {
  codeToRunOnClient = `
  (function() {
    const theme = ${JSON.stringify(theme)}

    let mode = localStorage.getItem("theme-ui-color-mode")

    if (!mode) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      if (typeof mql.matches === 'boolean' && mql.matches) {
        mode = "dark"
      }
    }

    if (mode && typeof theme.colors.modes === "object" && typeof theme.colors.modes[mode] === "object") {
      const root = document.documentElement
      Object.keys(theme.colors.modes[mode]).forEach((colorName) => {
        document.body.style.setProperty("--theme-ui-colors-"+colorName, "var(--theme-ui-colors-primary,"+theme.colors.modes[mode][colorName]+")")
      })
    }
  })()`;
}

const Nav = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScroll = window.scrollY;

    setVisible(
      (prevScroll > currentScroll && prevScroll - currentScroll > 70) ||
        currentScroll < 10
    );

    setPrevScroll(currentScroll);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "top 0.6s",
  };

  useEffect(() => {
    // the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
    document.body.removeAttribute("style");
  }, []);

  return (
    <Box sx={{ borderBottom: "1px solid", borderColor: "#dddddd" }}>
      <Container id="nav" as={"nav"} sx={styles.container}>
        <Flex
          as={"div"}
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Logo />

          {/* ---Script--- */}
          {codeToRunOnClient && (
            <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
          )}
          <Flex sx={{ gap: "2rem", justifyContent: "space-between" }}>
            <Flex
              as={"button"}
              sx={{
                alignItems: "center !important",
                gap: "5px",
                background: "none",
                color: "text",
              }}
            >
              <UilEnglishToChinese />{" "}
              <Text sx={{ fontSize: "14px" }}>Language</Text>
            </Flex>
            {typeof theme.colors.modes === "object" && <ThemeToggle />}
            <Flex
              as={"button"}
              sx={{
                alignItems: "center !important",
                gap: "5px",
                background: "none",
                color: "text",
              }}
            >
              <UilChat />
              <Text sx={{ fontSize: "14px" }}>Hubungi Kami</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Box
        className="nav-box"
        sx={{
          borderTop: "1px solid",
          borderColor: "#dddddd",
        }}
      >
        <Container className="nav-container">
          <Navbar />
        </Container>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // flexWrap: "wrap",
  },
};

export default Nav;
