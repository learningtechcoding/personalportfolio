import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center  md:px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex   flex-row justify-between   gap-y-6  ">
          {/* logo */}
          <Link href="/" className="w-[80px] md:w-[120px]">
            <Image
              src="/logo.svg"
              alt="logo"
              width={220}
              height={48}
              priority
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
