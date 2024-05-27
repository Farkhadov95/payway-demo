import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant={"ghost"}
        aria-label="Меню"
        icon={<GiHamburgerMenu />}
      />
      <MenuList>
        <MenuItem>ENG</MenuItem>
        <MenuItem>Вход</MenuItem>
        <MenuItem color={"#4CB8E9"}>Регистрация</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
