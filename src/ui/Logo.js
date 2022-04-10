import { NavLink } from "theme-ui"
import Link from "next/link"
import Image from "next/image"

// Yellow
import mainLogo from "../../public/img/logo.png"

const Logo = (props) => {
  return (
    <Link href={"/"} passHref>
      <NavLink id="nav-logo" className="logo" sx={styles.logo}>
        <Image
          quality={100}
          placeholder={"blur"}
          loading={"lazy"}
          src={mainLogo}
        />
      </NavLink>
    </Link>
  )
}

const styles = {
  logo: {
    marginRight: "1.5rem",
    height: "7.5rem",
    lineHeight: "7.5rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "all 0.3s ease-in-out",
  },
}

export default Logo
