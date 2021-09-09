import Hero from "./Components/Hero-page/Hero";
import AboutUs from "./Components/AboutUS/AboutUs";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

const THEME = createTheme({
  typography: {
    fontFamily: `'Caveat', cursive, "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
  },
});
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
        <MuiThemeProvider theme={THEME}>
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
              <Projects data={Data.projects} />
            </section>
            <section id="contact">
              <ContactUs />
            </section>
          </main>
        </MuiThemeProvider>
      )}
    </>
  );
}

export default App;
