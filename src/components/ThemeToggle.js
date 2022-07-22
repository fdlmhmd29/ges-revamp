import { useEffect, useState } from "react";
import { useColorMode, Box, Text, Flex } from "theme-ui";
import { UilMoon, UilSun } from "@iconscout/react-unicons";

// Yellow
import useTranslation from "next-translate/useTranslation";

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [opacity, setOpacity] = useState(0);

  const { t, lang } = useTranslation("common");
  const Tbutton1 = t("Tbutton1");
  const Tbutton2 = t("Tbutton2");

  useEffect(() => {
    // fade in animation
    setOpacity(1);
  }, []);

  return (
    <Box
      id="theme-toggle"
      as={"div"}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      sx={{
        color: colorMode === "default" ? "text" : "primary",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",

        ":hover": {
          color: colorMode === "default" ? "primary" : "secondary",
        },
      }}
    >
      <Box>
        {colorMode === "default" ? (
          <Flex sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}>
            <UilSun /> <Text sx={{ fontSize: "14px" }}>{Tbutton1}</Text>
          </Flex>
        ) : (
          <Flex sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}>
            <UilMoon /> <Text sx={{ fontSize: "14px" }}>{Tbutton2}</Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default ThemeToggle;
