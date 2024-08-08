import AccoutBlock from "./components/Accout/page";
import Copyright from "./components/Copyright/page";
import QuickBlock from "./components/Quick/page";
import SuportBlock from "./components/suport/page";

export default function Footer() {
    return (
        <footer className="w-full h-80 flex flex-col justify-between items-center bg-black">
            <div className="w-full flex justify-center items-center p-2 gap-16">
                <SuportBlock />
                <AccoutBlock />
                <QuickBlock />
            </div>
            <Copyright />
        </footer>
    )
}