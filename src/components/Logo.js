import { NavLink } from "theme-ui";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ href = "", logo, alt = "" }) => {
  return (
    <Link href={href} passHref>
      <NavLink id="main-logo" className="main-logo">
        <Image
          quality={100}
          placeholder={"blur"}
          loading={"lazy"}
          src={logo}
          alt={alt}
        />
      </NavLink>
    </Link>
  );
};

export default Logo;
