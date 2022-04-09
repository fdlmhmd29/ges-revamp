import { Box } from "theme-ui"
import { useRouter } from "next/router"
import { useEffect } from "react"

import ThemeToggle from "../ui/ThemeToggle"
import theme from "../layout/Theme"
import NavLink from "./NavLink"

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

const data = [
  {
    id: 1,
    title: "Blog",
    path: "/",
    includes: "/blog",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
]

const Links = (props) => {
  const router = useRouter()
  useEffect(() => {
    // the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
    document.body.removeAttribute("style")
  }, [])
  return (
    <Box id="nav-links" as={"div"} sx={styles.links}>
      {codeToRunOnClient && (
        <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
      )}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink
              href={item.path}
              active={
                router.pathname === item.path ||
                router.pathname.includes(item.includes)
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {typeof theme.colors.modes === "object" && <ThemeToggle />}
    </Box>
  )
}

const styles = {
  links: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
}

export default Links
