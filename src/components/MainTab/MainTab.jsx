import { useState } from "react";
import { Estructura } from "../Estructura/Estructura";
import { Constitucion } from "../Constitucion/Constitucion";

import { Sector } from "../Sector/Sector";
// import data from '../../data.json'
import './styles.css'


export function MainTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('')


  const handleTabClick = (event) => {
    setActiveTab(event);
  };

  const tabs = [
    {
      label: 'Estructura',
      id: 1,
      component: (
        <Estructura
    
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      ),
    },
    {
      label: 'Constitucion',
      id: 2,
      component: <Constitucion />,
    },
    {
      label: 'Sector',
      id: 2,
      component: <Sector />,
    },
  ];

  return (
    <div className="container">
      <div className="button-container">
        {tabs.map((tab, id) => (
          <div key={id} className="button-wrapper">
            <button
              className={`button ${id === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(id)}
            >
            </button>
            <div className="button-text">{tab.label}</div>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}