import Link from "next/link";

import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
    return (
        <div className="w-screen h-1/6 bg-offwhite flex flex-row place-content-between p-5 text-[.8rem] sm:text-[1rem]">
            <h5>© {new Date().getFullYear()} BCA Student Council 🐟 </h5>
            <div className="flex flex-row space-x-3 sm:space-x-5 text-xl sm:text-2xl">
                <Link href="https://www.instagram.com/bca.stuco/">
                    <BsInstagram className="hover:text-fadedyellow"/> 
                </Link>
                <Link href="https://www.tiktok.com/@bcastuco">
                    <SiTiktok className="hover:text-fadedyellow"/>
                </Link>
            </div>
        </div>


    )


}