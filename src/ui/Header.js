import React, { useState, useEffect } from "react"
import { Box } from "theme-ui"
import Nav from "./Nav"

function Header() {
  const [scroll, setScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0)
    })
  }, [])

  return (
    <Box id="header" as={"header"} className={scroll ? "scrolled" : null}>
      <Nav />
    </Box>
  )
}

export default Header
