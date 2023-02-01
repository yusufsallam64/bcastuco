import RouteItem from "./RouteItem"
import { useState } from 'react'

const links = [
    { name: "About", href: "/about" },
    { name: "Meet Us", href: "/meet-us" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact-us" }
]

console.log(links.length / 2)
console.log("order-" + (links.length / 2 + 1))

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

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
            return " transition-all duration-500 h-0 p-0 px-7"
        } else {
            return " transition-all duration-500 h-32 p-3 py-3 px-7"
        }
    }

    return (
        <div>
            <div className="text-lg w-full h-1/5 p-3 flex flex-row place-content-around max-sm:hidden">
                {
                links.map((route, index) => {
                    let elorder;
                    index < links.length / 2 ? elorder = "-1;" : elorder = "1;";
                    return (
                        <div className={" m-auto "} style={{ order: elorder }}>
                            <RouteItem name={route.name} link={route.href} />
                        </div>
                    )
                })
                }

                <div>
                    <img src="logo.webp" alt="Stuco Logo" />
                </div>
            </div>

            <div className="sm:hidden">
                <div className="w-full h-1/5 p-3 flex flex-row place-content-between ">
                    <img src="logo.webp" alt="Stuco Logo" />
                    <img className={setClass(menuOpen)} src={"hamburger.svg"} alt="Hamburger Menu" onClick={toggleMenu}/>   
                </div>

                <div className={"p-0 pt-0 h-0 flex flex-col text-right px-7 overflow-hidden " + setTransition(menuOpen)}>
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