import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full h-full flex justify-center items-center border-b-[1px] border-gray-200">
            <div className="w-full h-full flex justify-center items-center">
                <Image src="/bannerTeste.jpg" alt="logo" width={700} height={500} className="my-2" />

            </div>
        </div>
    )
}