import Hero from "./Components/Hero-page/Hero";
import AboutUs from "./Components/AboutUS/AboutUs";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <main id="home">
        <Navbar />
        <Hero />
        <section id="about">
          <AboutUs />
        </section>
        <Skills id="skills" />
        <Projects id="projects" />
        <ContactUs id="contact" />
      </main>
    </>
  );
}

export default App;
