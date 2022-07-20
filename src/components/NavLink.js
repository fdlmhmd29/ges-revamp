import { NavLink as A } from "theme-ui";
import Link from "next/link";

const NavLink = ({ href, active, children }) => (
  <Link href={href} passHref>
    <A
      sx={{
        position: "relative",
        color: "inherit",
        display: "block",
        margin: "0 1rem",
        textTransform: "uppercase",
        fontSize: "inherit",
        letterSpacing: "0.031rem",
        fontWeight: 500,
        textDecoration: "none",
        borderBottom: "0.031rem solid",
        borderColor: active ? "primary" : "background",
        cursor: "pointer",
        transition: "border-color .5s",

        "&:hover": {
          borderColor: "primary",
        },
      }}
    >
      {children}
    </A>
  </Link>
);

export default NavLink;
