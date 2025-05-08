"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLink = [
  {
    nama: "Beranda",
    path: "/",
  },
  {
    nama: "Jelajah Provinsi",
    path: "/jelajah",
  },
  {
    nama: "Tentang",
    path: "/tentang",
  },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className="z-10 relative">
      <nav className="py-3 flex justify-evenly items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
          <h1
            className={`font-extrabold text-xl ${
              pathname !== "/" ? "text-[#152259]" : "text-white"
            }`}
          >
            Jelajah Nusa
          </h1>
        </Link>

        <ul
          className={`flex items-center gap-6 ${
            pathname !== "/" ? "text-[#152259]" : "text-white"
          } `}
        >
          {navLink.map((link) => (
            <Link href={link.path} key={link.nama}>
              <li
                className={`rounded p-1 hover:underline ${
                  pathname === link.path ? "font-bold" : ""
                }`}
              >
                {link.nama}
              </li>
            </Link>
          ))}
        </ul>
        <Link href={'/kontak'}>
          <button
            className={`${
              pathname !== "/"
                ? "bg-[#152259] text-white hover:bg-gray-200 hover:text-[#152259]"
                : "bg-white text-[#152259] hover:bg-[#152259] hover:text-white"
            }   font-bold px-4 py-2 rounded cursor-pointer `}
          >
            Kontak
          </button>
        </Link>
      </nav>
      <div className="px-10">
        <Separator />
      </div>
    </div>
  );
}
