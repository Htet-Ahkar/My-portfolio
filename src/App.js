import Hero from "./Components/Hero-page/Hero";
import AboutUs from "./Components/AboutUS/AboutUs";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [Data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("Data/db.json");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Data && (
        <main id="home">
          <Navbar buttons={Data.navbar.links} />
          <section>
            <Hero data={Data.hero} />
          </section>
          <section id="about">
            <AboutUs data={Data.aboutUs} />
          </section>
          <section id="skills">
            <Skills data={Data.skills} />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <ContactUs />
          </section>
        </main>
      )}
    </>
  );
}

export default App;
