import Image from 'next/image';
import Navbar from '../components/Navbar';
import Front from "../components/Front";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import OurPrograms from '@/components/OurPrograms';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
    <Front />
    <About />
    <OurPrograms />
    <Footer />
    </>
  );
}
