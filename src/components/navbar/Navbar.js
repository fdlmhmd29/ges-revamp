import { Box } from "theme-ui";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { idItems } from "../data/id";
import { enItems } from "../data/en";
import MenuItems from "./MenuItems";
import { debounce } from "../../utilities/debounce";

const Navbar = () => {
  let router = useRouter();
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScroll = window.scrollY;

    setVisible(
      (prevScroll > currentScroll && prevScroll - currentScroll > 70) ||
        currentScroll < 10
    );

    setPrevScroll(currentScroll);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, visible, handleScroll]);

  let items =
    router.locale === "id" ? idItems : router.locale === "en" ? enItems : null;

  return (
    <Box className="menus" sx={{ marginLeft: "-16px" }}>
      {items.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </Box>
  );
};

export default Navbar;
