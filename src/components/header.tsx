import Banner from "./banner";
import NavBar from "./nav";

const Header = () => {
  return (
    <header className="flex flex-col min-h-screen w-full">
      <Banner />
      <NavBar />
    </header>
  );
};

export default Header;
