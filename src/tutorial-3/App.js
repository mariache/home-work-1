import "./style.css";
import { useState } from "react";
import { tabs } from "./mocks/tabs";
import Tab from "./components/Tab";

const App = () => {
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => setActiveId((prev) => (id !== prev ? id : null));

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          {tabs.map((tabContent) => (
            <Tab
              activeId={activeId}
              handleClick={handleClick}
              tabContent={tabContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
