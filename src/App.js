import Header from "./Components/Header";
import "./Styles/Header.scss"
import "./Styles/App.scss"
import "./Styles/About_me.scss"
import "./Styles/Projects.scss"
import "./Styles/Contact.scss"
import "./Styles/Footer.scss"
import "./Styles/MediaQuery.scss"
import Body from "./Components/Body";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
