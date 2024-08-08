import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
import PromotionProduct from "@/components/Promotion/page";
import Sidebar from "@/components/sidebar/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Navbar />
      <section className="w-full h-full flex justify-center items-center px-5 gap-8">
        <Sidebar />
        <Banner />
      </section>
      <section className="w-full h-full flex justify-center items-center flex-col mt-32 mb-32 px-24 ">
        <PromotionProduct />
        <button className="w-32 h-16 mt-10 flex justify-center items-center rounded-md bg-[#DB4444] text-white font-bold">Load More</button>
      </section>
      <Footer />
    </main>
  );
}

