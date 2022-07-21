import { menuItems } from "../data/menuItems";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <ul className="menus">
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
};

export default Navbar;
