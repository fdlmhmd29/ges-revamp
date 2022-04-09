import { useEffect, useState } from "react"
import { Box, useColorMode } from "theme-ui"
import { UilMoon, UilSun } from "@iconscout/react-unicons"

// Yellow
import Button from "./Button"

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <Box>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        {colorMode === "default" ? <UilMoon /> : <UilSun />}
      </Button>
    </Box>
  )
}

export default ThemeToggle
