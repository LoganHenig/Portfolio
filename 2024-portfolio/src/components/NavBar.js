import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { PopUp } from "./popup";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export const NavBar = () => {
  const [animation, setAnimation] = useState ("");

  useEffect(() =>{
    if (animation == 'pop-up' && animation !== 'pop-down'){
      setTimeout(() =>{
        setAnimation('pop-down');
        setTimeout(() =>{
          //setAnimation("");
        }, 3000)
      }, 3000)
    }
  },[animation])
  return (
    <>
    <Navbar shouldHideOnScroll className="bg-dark">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">LOGAN HENIG</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button color="primary" variant="light" onClick={() => 
            {
              navigator.clipboard.writeText("logan.henig@gmail.com")
              setAnimation('pop-up')
            }}>
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
    {(animation == 'pop-up' || animation == 'pop-down') &&
      <PopUp animation={animation}/>
    }
    </>
  );
}
