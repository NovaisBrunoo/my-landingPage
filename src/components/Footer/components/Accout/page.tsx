export default function AccoutBlock() {
    return (
        <div className="w-44 h-full flex justify-center items-start flex-col gap-2 text-white">
            <div className="h-1/4">
                <h1 className="font-bold text-2xl">
                    Accout
                </h1>
            </div>
            <div className="h-3/4 flex justify-start items-start flex-col gap-2">
                <span>My Account</span>
                <span>Login/ Register</span>
                <span>Cart</span>
                <span>Shop</span>
            </div>
        </div>
    )
}