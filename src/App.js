import { useState } from "react";
import "./App.css";
import { Data } from "../src/Components/Data";
import About from "../src/Components/About.jsx";
import Services from "../src/Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import BackgroundImage from "./images/background.png";
function App() {
  const [contact] = useState(Data);
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <header id="header">
        <div className="container md={12}">
          <nav>
            <h1 style={{ color: "white", fontWeight: "bold" }}>
              <span>V</span>ersha
            </h1>
            <ul id="sidemenu">
              {contact.map((contact) => (
                <li>
                  <a href={contact.link}>{contact.name}</a>
                </li>
              ))}
              <i class="fa-sharp fa-solid fa-xmark" onclick="closemenu()"></i>
            </ul>
            <i claamessN="fa-solid fa-bars" onclick="openmenu()"></i>
          </nav>
          <div className="header-text">
            <p style={{ fontSize: 30, color: "white" }}>Frontend Developer</p>
            <h1 style={{ color: "white" }}>
              Hi, I'm <span>Versha</span>
              <br />
              Dadhore From India
            </h1>
          </div>
          </div>
          <div className="header-image">
            <img src={BackgroundImage} alt="error" />
          </div>
       
      </header>
      <About />
      <div id="services">
        <div className="container">
          <h1
            className="Abc"
            style={{ fontSize: 60, color: "white", fontWeight: "bold" }}
          >
            My Services
          </h1>
          <br />
          <Services />
        </div>
        <Work />
        <Contact />
      </div>
    </div>
  );
}
export default App;
