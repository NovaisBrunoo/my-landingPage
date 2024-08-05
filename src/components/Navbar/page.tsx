import Search from "./components/Search/input";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-around items-center border-b-[1px] border-gray-400 px-3">
      <div className="w-full h-10 flex justify-center items-center my-2 gap-2">
        <div className="w-[10%] flex justify-start items-center">
          <h1 className="font-bold text-lg">Exclusive</h1>
        </div>
        <div className="flex p-4">
          <a className="p-2 px-4 group" href="#">
            Home
            <div className="bg-[#DB4444] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a className="p-2 px-4 group" href="#">
            Products
            <div className="bg-[#DB4444] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a className="p-2 px-4 group" href="#">
            Contact
            <div className="bg-[#DB4444] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>

        <Search />
      </div>
    </div>
  )

}