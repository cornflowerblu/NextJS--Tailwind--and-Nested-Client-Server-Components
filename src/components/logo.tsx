import Image from "next/image";
import logoImage from "@/images/wordmark.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="flex justify-start items-center gap-2.5"
        src={logoImage}
        alt="logo"
        width={131}
        height={54}
      />
    </Link>
  );
};

export default Logo;
