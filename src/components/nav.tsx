import Link from "next/link";
import Logo from "./logo";

const NavBar = () => {
  return (
    <main className="h-20 p-4 w-full lg:w-[1440px] justify-evenly items-center gap-4 inline-flex">
      <Logo />
      <ul className="p-2.5 justify-start items-center gap-6 flex">
        <li className="text-center text-[#605dec] text-base font-normal font-['Nunito Sans']">
          Flights
        </li>
        <li className="text-center text-[#7b8db0] text-base font-normal font-['Nunito Sans']">
          Hotels
        </li>
        <li className="text-center text-[#7b8db0] text-base font-normal font-['Nunito Sans']">
          Packages
        </li>
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
    </main>
  );
};

export default NavBar;
