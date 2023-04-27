import { useState } from "react";
import "./App.css";
import logo from "./assets/Vector.png";
import Switch from "./components/Switch";

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
          <Switch status={switch1} setStatus={setSwitch1} />
          <Switch status={switch2} setStatus={setSwitch2} />
          <Switch status={switch3} setStatus={setSwitch3} />
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
