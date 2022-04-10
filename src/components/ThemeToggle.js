import { useEffect, useState } from "react"
import { useColorMode, Box } from "theme-ui"
import { UilMoon, UilSun } from "@iconscout/react-unicons"

// Yellow

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <Box
      id="theme-toggle"
      as={"div"}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default")
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
      {colorMode === "default" ? <UilMoon size={17} /> : <UilSun />}
    </Box>
  )
}

export default ThemeToggle
