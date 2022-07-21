import { Box } from "theme-ui";
import React, { useState, useEffect } from "react";
import { menuItems } from "../data/menuItems";
import MenuItems from "./MenuItems";
import { debounce } from "../../utilities/debounce";

const Navbar = () => {
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

  return (
    <Box className="menus" sx={{ marginLeft: "-16px" }}>
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </Box>
  );
};

export default Navbar;
