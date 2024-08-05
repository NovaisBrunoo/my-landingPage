import Header from "@/components/Header/page";
import Navbar from "@/components/Navbar/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Navbar />
    </main>
  );
}

