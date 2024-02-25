import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white h-44">
            <div className="px-20 flex gap-24">
                <div className="grid grid-cols-1 py-4">
                    <h1 className="text-xl">Categories</h1>
                    <Link href={'/'}> Website Builders</Link>
                    <Link href={'/'}> Today&apos;s deals</Link>
                </div>
                <div className="grid grid-cols-1 py-4">
                    <h1 className="text-xl">Contact</h1>
                    <Link href={'/'}> Contact</Link>
                    <Link href={'/'}> Privacy Policy</Link>
                    <Link href={'/'}> Terms Of Service</Link>
                    <Link href={'/'}> Categories</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;