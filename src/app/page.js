import Body from "@/components/Body";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white antialiased  dark:bg-black
    dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] "
    >
      <Navbar />
      <Body/>
   
      <Footer />
    </main>
  );
}
