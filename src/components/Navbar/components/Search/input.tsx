import Image from "next/image";
import Car from "./assets/car.svg";
import Like from "./assets/like.svg";
import Seach from "./assets/seach.svg";

export default function Search() {
  return (
    <div className="w-[40%] h-9 flex justify-center items-center">
      <input
        className="w-1/2 h-9 flex justify-center items-center bg-gray-200 rounded-md py-2 px-5"
        type="text"
        name=""
        id=""
        placeholder="What are you looking for?"
      />

      <Image
        className="relative top-0 right-9"
        src={Seach}
        alt="search"
        width={30}
        height={30} />
      <div className="flex justify-center items-center gap-2">
        <Image src={Car} alt="search" width={30} height={30} />
        <Image src={Like} alt="search" width={30} height={30} />
      </div>
    </div>
  )

}