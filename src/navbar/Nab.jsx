import Link from "next/link";

const Nab = () => {
    return (
        <div className="flex justify-evenly h-12 text-xl items-center bg-black text-white">
            <p>search bar</p>
            <Link href={'/'}> Categories</Link>
            <Link href={'/'}> Website Builders</Link>
            <Link href={'/'}> Today&apos;s deals</Link>
        </div>
    );
};

export default Nab;