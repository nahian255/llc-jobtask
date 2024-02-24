import Image from "next/image";
import Nab from "@/navbar/Nab";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* Navbar  */}
      {/* <Nab></Nab> */}
      <div className="flex justify-evenly h-12 text-xl items-center bg-black text-white">
        <Link href={'/'}> Categories</Link>
        <Link href={'/'}> Website Builders</Link>
        <Link href={'/'}> Today&apos;s deals</Link>
      </div>
      <h1 className="text-4xl">Best Website builders in the US</h1>
    </main>
  );
}
