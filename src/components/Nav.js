import { Container } from "theme-ui"
import { useEffect } from "react"

// Yellow
import { ThemeToggle, Links, Logo } from "../lib"
import theme from "../layout/Theme"

// inject inline styles on the body before the page is rendered to avoid the flash of light if we are in dark mode
let codeToRunOnClient = false
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
  })()`
}

const Nav = (props) => {
  useEffect(() => {
    // the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
    document.body.removeAttribute("style")
  }, [])

  return (
    <Container id="nav" as={"nav"} sx={styles.container}>
      <Logo />
      <Links />

      {/* ---Script--- */}
      {codeToRunOnClient && (
        <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
      )}
      {typeof theme.colors.modes === "object" && <ThemeToggle />}
    </Container>
  )
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}

export default Nav
