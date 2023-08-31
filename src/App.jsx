// import Navbar from "./sections/navbar/Navbar";
// // import Header from "./sections/header/Header";
// import Header from "./sections/header/Header";
// import About from "./sections/about/About";
// import Services from "./sections/services/Services";
// import Portfolio from "./sections/portfolio/Portfolio";
// import FAQs from "./sections/faqs/FAQs";
// import Contact from "./sections/contact/Contact";
// import Footer from "./sections/footer/Footer";
// // import Modal from "./components/Modal";
// // import FloatingNav from "./sections/floating-nav/FloatingNav";
// // this is main which will handle all the componets globally
// const App = () => {
//   return (
//     <main>
//       <Navbar />
//       <Header />
//       <About />
//       <Services />
//       <Portfolio />

//       <FAQs />
//       <Contact />

//       {/* <FloatingNav /> */}
//       <Footer />
//       {/* <Modal /> */}
//     </main>
//   );
// };

// export default App;

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

import { useRef, useState, useEffect } from "react";

const App = () => {
  // const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  return (
    <main
      // className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Myskill />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <FAQs />
      <Contact />
      <Footer />

      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
