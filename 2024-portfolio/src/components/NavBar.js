import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll className="bg-dark">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">LOGAN HENIG</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button color="primary" variant="light" >
            logan.henig@gmail.com
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
          <Link color="primary" target="_blank" href="https://github.com/LoganHenig">
            GitHub_Portfolio
          </Link>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link color="primary" target="_blank" href="https://github.com/LoganHenig">
            Other Thing
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
