import Image from "next/image";
import Nab from "@/navbar/Nab";

export default function Home() {
  return (
    <main className="">
      {/* Navbar  */}
      {/* <Nab></Nab> */}
      <div className="h-8 bg-black text-white">
        <h1 className="text-white">nav</h1>
      </div>
      <h1 className="text-4xl">Best Website builders in the US</h1>
    </main>
  );
}
