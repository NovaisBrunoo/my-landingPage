import Image from "next/image";
import Profile from "./assets/profile.svg";

export default function Header() {
    return (
        <div className="w-full h-12 flex justify-center items-center bg-black mobile:text-xs mobile:px-3">
            <div className="w-full flex justify-center items-center gap-2">
                <h1 className="text-white flex justify-center items-center text-center ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1> <strong className="text-white underline cursor-pointer">ShopNow</strong>
            </div>
            <div className="flex justify-center items-center w-20 cursor-pointer">
                <Image src={Profile} width={30} height={30} alt="flag" />
            </div>

        </div>
    )

}