import Image from "next/image"
import LeftArrow from "./assets/left-arrow.svg"
import RightArrow from "./assets/right-arrow.svg"
import CardProduct from "./components/CardProduct"

export default function PromotionProduct() {
    return (
        <>
            <div className="w-full h-10 flex justify-start items-center gap-4">
                <div className="w-5 h-10 bg-[#DB4444] rounded-md " />
                <h1 className="font-bold text-[#DB4444]">Today`s</h1>
            </div>

            <div className="w-full h-12 flex justify-between items-center mt-6">
                <h1 className="font-bold text-3xl ">Flash Sales</h1>
                <div className="w-28 h-12 flex justify-center items-center gap-2">
                    <div className="w-11 h-11 rounded-full flex justify-center items-center bg-[#F5F5F5]">
                        <Image src={LeftArrow} alt="left-arrow" />
                    </div>
                    <div className="w-11 h-11 rounded-full flex justify-center items-center bg-[#F5F5F5]">
                        <Image src={RightArrow} alt="right-arrow" />
                    </div>
                </div>

            </div>

            <div className="w-full h-full flex justify-center items-center ">
                <CardProduct />
            </div>
        </>
    )

}