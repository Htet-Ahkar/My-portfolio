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
        <section>
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}

export default App;
