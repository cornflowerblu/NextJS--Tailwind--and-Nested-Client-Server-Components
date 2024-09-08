import Link from "next/link";
import Logo from "./logo";
import NavBarItem, { NavItem } from "@/components/nav-item";

const navItems: NavItem[] = [
  {
    id: 1,
    name: "Flights",
    href: "/flights",
  },
  {
    id: 2,
    name: "Hotels",
    href: "/hotels",
  },
  {
    id: 3,
    name: "Packages",
    href: "/packages",
  },
];

const NavBar = () => {
  return (
    <section className="h-20 px-6 py-4 w-full xl:w-[1440px] justify-between items-center gap-4 inline-flex">
      <Logo />
      <ul className="p-2.5 justify-start items-center gap-6 flex">
        <NavBarItem navItems={navItems} />
        <li className="text-center text-[#7b8db0] text-base font-normal font-['Nunito Sans']">
          <Link href="/">Sign in</Link>
        </li>
        <Link href="/">
          <li className="px-5 py-2 bg-[#605dec] rounded justify-start items-center gap-2 flex">
            <span className="text-neutral-50 text-base font-normal font-['Nunito Sans']">
              Sign up
            </span>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default NavBar;
