import Front from "../components/Front";
import About from "../components/About";
import OurPrograms from "@/components/OurPrograms";
import OurProgramsLap from "@/components/OurProgramsLap";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Front />
      <About />
      <main>
        <OurPrograms />
      </main>
      <div id="contact"> {/* Make sure this ID exists */}
        <Footer />
      </div>
    </>
  );
}
