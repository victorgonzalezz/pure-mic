import { useState } from "react";
import { Sector } from "../Sector/Sector";
import { TipoDeEmpresa } from "../TipoDeEmpresa/TipoDeEmpresa";

import './styles.css'

export function MainTab() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (event) => {
    setActiveTab(event);
  };

  const tabs = [
    {
      label: 'Sector',
      id: 1,
      component: <Sector />,
    },
    {
      label: 'Tipo de empresa',
      id: 2,
      component: <TipoDeEmpresa />,
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
            {id < tabs.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}