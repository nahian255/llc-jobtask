import Image from "next/image";
import Nab from "@/navbar/Nab";
import Link from "next/link";
import Header from "@/header/Header";
import Card from "@/card/Card";
import Footer from "@/footer/Footer";
import Foo from "@/components/Foo";

export default function Home() {
  return (
    <main className="">
      <Nab></Nab>
      <Header></Header>
      <Card />

      {/* Singup part */}
      <div className="px-20 py-4">
        <h1 className="text-2xl py-6"> Sign up and get exclusive special deals</h1>
      </div>

      <Footer />
      <h1>Is this really happend</h1>
      <Foo />
    </main>
  );
}
