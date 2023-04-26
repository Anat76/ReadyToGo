import { useState } from "react";
import "./App.css";
import logo from "./assets/Vector.png";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <section>
      <header>
        <img src={logo} alt="" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div className="button">
          <div>
            <button
              className={switch1 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              ON
            </button>
            <button
              className={switch1 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch2 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch2(!switch2);
              }}
            >
              ON
            </button>
            <button
              className={switch2 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch2(!switch2);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch3 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch3(!switch3);
              }}
            >
              ON
            </button>
            <button
              className={switch3 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch3(!switch3);
              }}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="lanch">
          <button className={switch1 && switch2 && switch3 ? "green" : "red"}>
            <p>{switch1 && switch2 && switch3 ? "GO !" : "NO WAY !"}</p>
          </button>
        </div>
      </main>

      <footer>
        <p>Made with React at Le Reacteur by Anat</p>
      </footer>
    </section>
  );
};

export default App;
