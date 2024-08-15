import Image from "next/image";
import Navbar from "./ui/components/navbar/page";
import Footer from "./ui/components/footer/page";
import HomePage from "./ui/pages/home/page";
import About from "./ui/pages/about/page";
import Projects from "./ui/pages/projects/page";
import Contact from "./ui/pages/contact/page";
import Testimonials from "./ui/pages/testimonials/page";
import Services from "./ui/pages/servicespage/page";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomePage/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}
