import Image from "next/image";
import logoImage from "@/images/wordmark.svg";

const Logo = () => {
  return (
    <Image
      className="flex justify-start items-center gap-2.5"
      src={logoImage}
      alt="logo"
      width={131}
      height={54}
    />
  );
};

export default Logo;
