import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='px-20'>
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
        </div>
    );
};

export default Header;