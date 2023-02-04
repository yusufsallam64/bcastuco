import RouteItem from "./RouteItem"
import { useState } from 'react'
import Image from 'next/image'


const links = [
    { name: "About", href: "#about" },
    { name: "Meet Us", href: "/meet-us" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact-us" }
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300`;


    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    } 

    function setClass(menuOpen : boolean) {
        if (!menuOpen) {
            return " m-4 transition h-1/30 w-1/30 hover:outline hover:outline-1"
        } else {
            return " m-4 transition h-1/30 w-1/30 hover:outline hover:outline-1"
        }
    }

    function setTransition(menuOpen : boolean) {
        if (!menuOpen) {
            return " transition-all duration-500 h-0 p-0 px-7 "
        } else {
            console.log(links.length * 8)
            // return ` transition-all duration-500 p-3 py-3 px-7 h-${links.length * 8}`
            return ` transition-all duration-500 p-3 py-3 px-7 h-32`
        }
    }

    return (
        <div className=" sticky top-0 bg-white sm:backdrop-blur-lg sm:bg-transparent shadow-md w-full">
           <div className="text-lg w-full h-1/5 p-3 pb-2 px-0 grid grid-cols-5 justify-items-center max-sm:hidden">
                {
                links.map((route, index) => {
                    let elorder;
                    index < links.length / 2 ? elorder = "-1" : elorder = "1";
                    return (
                        <div className={" m-auto "} style={{ order: elorder }}>
                            <RouteItem name={route.name} link={route.href} />
                        </div>
                    )
                })
                }

                <div>
                    <a href="#">
                        <Image
                            src="/logo.webp"
                            alt="Stuco Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
            </div>


            <div className="sm:hidden relative">
                
                <div className="w-full h-1/5 p-3 flex flex-row place-content-between">
                    <a href="#">
                        <Image
                            src="/logo.webp"
                            alt="Stuco Logo"
                            width={50}
                            height={50}
                        />
                    </a>

                    <button
                        className="flex flex-col h-10 w-10 my-auto mx-2.5 rounded justify-center items-center group"
                        onClick={() => { setIsOpen(!isOpen); toggleMenu(); } }
                        >
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                    </button>
                </div>

                <div className={"p-0 pt-0 h-0 flex flex-col text-right px-7 overflow-hidden w-full bg-white shadow-md " + setTransition(menuOpen)}>
                    {links.map((route) => {
                        return (
                            <RouteItem name={route.name} link={route.href} />
                        )
                    })}
                </div> 
            </div>
                
        </div>
    )
}