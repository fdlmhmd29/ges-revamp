import { useRouter } from "next/router"
import { Container } from "theme-ui"
import NavLink from "./NavLink"
import Links from "./Links"

const Nav = (props) => {
  const router = useRouter()
  return (
    <Container id="nav-container" as={"nav"} sx={styles.navContainer}>
      <NavLink href={"/"}>LOGO</NavLink>
      <Links />
    </Container>
  )
}

const styles = {
  navContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}

export default Nav
