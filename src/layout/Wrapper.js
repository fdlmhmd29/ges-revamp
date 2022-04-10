import { ThemeProvider } from "theme-ui"
import ReactGA from "react-ga"

// Yellow
import Layout from "./Layout"
import Theme from "./Theme"
import config from "../../blog.config"

const Wrapper = (props) => {
  if (typeof config.analytics === "string" && config.analytics !== "") {
    ReactGA.initialize(config.analytics)
    ReactGA.set({ anonymizeIp: true })
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <Layout {...props} />
    </ThemeProvider>
  )
}

export default Wrapper
