"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu"

type MenuItem = {
  name: string; 
  path: string;
  active: boolean;
}

export function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList)

  // const isService = true;
  // const updateMenu = (path : string) => {
  //   const newMenu = MenuList.map((item) => {
  //       if(path === item.path) {
  //         return {
  //           ...item,
  //           active: true
  //         }
  //       } else {
  //         return {
  //           ...item,
  //           active: false
  //         }
  //       }
  //   })
  //   setMenu(newMenu)
  // }

  console.log(pathname);
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          width={90}
          height={90}
          src="/next.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink key={index}  as={Link} href={item.path} active={item.path === pathname} >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
