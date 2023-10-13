"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "",
      label: "Gallery",
      dropdown: [
        { path: "/gallery/maine", label: "Maine Landscape" },
        { path: "/gallery/landscape", label: "Landscape Elsewhere" },
        { path: "/gallery/portraiture", label: "Portraiture" },
        { path: "/gallery/commissioned", label: "Commissioned Work" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Commission/Contact" },
  ];
  return (
    <nav className="flex justify-between max-w-[1000px] mx-auto px-10 py-4 bg-white text-black font-extralight">
      <Link href="/" className="text-2xl text-left font-light ">
        Wade Perry Art
      </Link>
      <ul className="flex space-x-4 text-right">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="relative group cursor-default"
            onMouseEnter={() => setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.path ? (
              <Link
                href={item.path}
                className={`${
                  path === item.path ? "border-b-2 border-black" : ""
                } hover:text-blue-500 cursor-pointer`}
              >
                {item.label}
              </Link>
            ) : (
              item.label
            )}

            {openDropdown === item.label && item.dropdown && (
              <ul className="z-50 absolute left-0 space-y-2 bg-white text-black p-2 rounded shadow-lg">
                {item.dropdown.map((subItem) => (
                  <li key={subItem.path}>
                    <Link
                      href={subItem.path}
                      className="flex text-left whitespace-nowrap hover:text-blue-500"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
