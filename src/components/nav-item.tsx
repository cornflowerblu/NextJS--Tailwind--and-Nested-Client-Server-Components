"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavItem = {
  id: number;
  name: string;
  href: string;
};

type NavItemProps = {
  navItems: NavItem[];
};

const NavBarItem: React.FC<NavItemProps> = ({ navItems }) => {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Reset selection if the current route is the homepage
    if (pathname === "/") {
      setSelectedItemId(0);
    }
  }, [pathname]);

  const handleSelection = (id: number) => {
    setSelectedItemId(id);
  };

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.id}
          className={`cursor-pointer hover:text-[#605dec] transition text-center text-base font-normal font-['Nunito Sans'] ${
            selectedItemId === item.id ? "text-[#605dec]" : "text-[#7b8db0]"
          }`}
          onClick={() => handleSelection(item.id)}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </>
  );
};

export default NavBarItem;
