import Banner from "@/components/Banner/page";
import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";
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
    </main>
  );
}

