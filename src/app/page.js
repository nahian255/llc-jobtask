import Image from "next/image";
import Nab from "@/navbar/Nab";
import Link from "next/link";
import Header from "@/header/Header";
import Card from "@/card/Card";

const cardData = [
  { id: 1, image: 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__', textOne: 'WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)', textTwo: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.', ratting: '9.8' },
  // { id: 2, image: '/../../public/LLC.png', textOne: 'SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)', textTwo: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.', ratting: '9.5' },
  // { id: 3, image: '/../../public/LLC.png', textOne: 'SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)', textTwo: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.', ratting: '9.5' },
  // { id: 4, image: '/../../public/LLC.png', textOne: 'SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)', textTwo: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.', ratting: '9.5' },
]

export default function Home() {
  return (
    <main className="">

      {/* Navbar  */}
      {/* <Nab></Nab> */}
      <div className="flex justify-evenly h-12 text-xl items-center bg-black text-white">
        <p>search bar</p>
        <Link href={'/'}> Categories</Link>
        <Link href={'/'}> Website Builders</Link>
        <Link href={'/'}> Today&apos;s deals</Link>
      </div>

      {/* Header */}
      <Header></Header>
      {/* <div className='px-20'>
        <h1 className="text-4xl">Best Website builders in the US</h1>
        <div className="py-4">
          <hr />
          <div className="flex gap-8 h-8 items-center">
            <h1>Last Updated-February 22, 2020</h1>
            <h1>Advertising Disclosure</h1>
          </div>
          <hr />
        </div>
        <div className="flex justify-evenly">
          <Link href={'/'}> Tools</Link>
          <Link href={'/'}> AWS Builder</Link>
          <Link href={'/'}> Start Build</Link>
          <Link href={'/'}> Build Supplies</Link>
          <Link href={'/'}> Tooling</Link>
          <Link href={'/'}> BlueHosting</Link>
        </div>
        <div className="flex gap-3 py-2">
          <p>Home</p>
          <p>{'>'}</p>
          <p>Hosting for all</p>
          <p>{'>'}</p>
          <p>Hosting</p>
          <p>{'>'}</p>
          <p>Hosting6</p>
          <p>{'>'}</p>
          <p>Hosting5</p>
        </div>
      </div> */}

      {/* card */}
      {/* <Card /> */}
      <div className='px-20 py-4'>
        {
          cardData.map(data => (
            <div key={data.id} className="py-4" >
              <div className='grid grid-cols-3'>
                <Image height={200} width={200} src={data?.image}></Image>
                <div>text</div>
                <div> ratting</div>
              </div>

            </div>
          ))
        }
      </div>

    </main>
  );
}
