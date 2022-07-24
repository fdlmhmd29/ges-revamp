import { Box, Container, Flex, Text, Link } from "theme-ui";
import React, { useEffect } from "react";
import { UilChat, UilEnglishToChinese } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
// Yellow
import { mainLogo } from "../lib/image";
import { ThemeToggle, Logo } from "../lib";
import Navbar from "./navbar/Navbar";
import theme from "../layout/Theme";

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
  const { t, lang } = useTranslation("common");
  const text = t("Ntext");
  const button = t("SCbutton");
  let router = useRouter();
  let link =
    router.locale === "id" ? "/en" : router.locale === "en" ? "/id" : null;

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
          <Flex className="main-logo__container" sx={styles.logo}>
            <Logo
              href={"/"}
              logo={mainLogo}
              alt={"Logo perusahaan PT Greenfield Environment Solution"}
            />
          </Flex>

          {/* ---Script--- */}
          {codeToRunOnClient && (
            <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
          )}
          <Flex sx={{ gap: "2rem", justifyContent: "space-between" }}>
            <Flex
              sx={{
                alignItems: "center !important",
                gap: "5px",
                background: "none",
                color: "text",
              }}
            >
              <UilEnglishToChinese />
              <Link href={link}>
                <Text sx={{ fontSize: "14px" }}>{text}</Text>
              </Link>
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
              <Text sx={{ fontSize: "14px" }}>{button}</Text>
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
  logo: {
    height: "7.5rem",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
  },
};

export default Nav;
