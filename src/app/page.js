import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-white antialiased dark:bg-black
      dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] flex flex-col"
    >
      <Navbar />
      <div className="flex-grow">
        <Body />
      </div>
      <Footer />
    </main>
  );
}
