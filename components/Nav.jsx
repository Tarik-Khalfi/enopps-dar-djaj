'use client'
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

const Nav = () => {
    const [active, setactive] = useState('')
    return (

        <header className="navbg pt-8 font-poppins">
            <div className="flex container justify-between  py-10 items-center   px-5">
                <Image src='/logo.png' alt="logo" width={70} height={70} />
                <nav className="text-white">
                    <ul className="flex gap-10 font-medium">
                        <li>
                            <Link onClick={() => setactive('home')}
                                className={` ${active === 'home' ? ' border-b-2 pb-1 transition-all border-[#D7B686]' : 'border-none'}`}
                                href='/'>Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('menu')}
                                className={` ${active === 'menu' ? ' border-b-2 pb-1 transition-all border-[#D7B686]' : 'border-none'}`}
                                href='/menu'>Our Menu</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('contact')}
                                className={` ${active === 'contact' ? ' border-b-2 pb-1 transition-all border-[#D7B686]' : 'border-none'}`}
                                href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Nav