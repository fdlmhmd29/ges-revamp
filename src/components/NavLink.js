import { NavLink as A } from "theme-ui";
import Link from "next/link";

const NavLink = ({ href = "", active, children }) => (
  <Link href={href} passHref>
    <A
      sx={{
        position: "relative",
        color: "#8c98a4 !important",
        letterSpacing: "0.031rem",
        fontWeight: 400,
        textDecoration: "none",
        borderBottom: "0.031rem solid",
        borderColor: active ? "primary" : "background",
        cursor: "pointer",
        transition: "border-color .5s",

        "&:hover": {
          borderColor: "primary",
          color: "#29b600 !important",
        },
      }}
    >
      {children}
    </A>
  </Link>
);

export default NavLink;
