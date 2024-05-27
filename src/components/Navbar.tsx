import { HStack, Link, useMediaQuery } from "@chakra-ui/react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <HStack
      height={"80px"}
      justifyContent={"end"}
      paddingX={{ base: 2, sm: 5, md: 10 }}
      gap={8}
    >
      {isSmallScreen ? (
        <NavMenu />
      ) : (
        <>
          <Link>ENG</Link>
          <HStack gap={3}>
            <Link>Вход</Link>
            <Link color={"#4CB8E9"}>Регистрация</Link>
          </HStack>
        </>
      )}
    </HStack>
  );
};

export default Navbar;
