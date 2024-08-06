import Image from "next/image";
import banner from "./assets/banner.svg";

export default function Banner() {
    return (
        <div className="w-full h-20 flex justify-center items-center border-b-[1px] border-gray-200">
            <Image src={banner} alt="logo" width={100} height={100} />
        </div>
    )
}