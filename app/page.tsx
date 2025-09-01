import About from "@/components/About";
import Banner from "@/components/Banner";
import TechStack from "@/components/TechStack";
import Certificate from "@/components/Certificate";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full bg-black bg-[url('/LooperGroup.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <TechStack />
        <Certificate />
        <Experience />    
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
