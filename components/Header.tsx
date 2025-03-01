import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/travelBandit_plane_logo-01.svg"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={100}
          height={100}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          Travel Bandit
        </h1>
      </Link>
    </header>
  );
}
