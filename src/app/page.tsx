import Banner from "@/components/banner";
import NavBar from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Banner />
      <NavBar />
    </main>
  );
}
