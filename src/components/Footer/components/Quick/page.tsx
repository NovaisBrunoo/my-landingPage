export default function QuickBlock() {
    return (
        <div className="w-44 h-full flex justify-center items-start flex-col gap-2 text-white">
            <div className="h-1/4">
                <h1 className="font-bold text-2xl">
                    Quick Link
                </h1>
            </div>
            <div className="h-3/4 flex justify-start items-start flex-col gap-2">
                <span>Privacy Policy</span>
                <span>Terms Of Use</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
        </div>
    )
}