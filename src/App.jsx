import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Myskill from "./sections/myskill/Myskill";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-vertical-timeline-component/style.min.css"; // this is for the verticle timeline component
const App = () => {
  const mainRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);
  // this function will show the navbar based on the scroll changed
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowNavbar(currentScrollPos > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <Header />

      <About />
      <Myskill />
      <Services />
      <Portfolio />

      <FAQs />
      <Contact />
      <Footer />

      {showNavbar && <Navbar />}
      {showNavbar && <FloatingNav />}
      <ToastContainer />
    </main>
  );
};

export default App;
