import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    <Hero/>
<RecentProject/>
<Experience/>
<Footer/>
    </div>
   </main>
  );
}
