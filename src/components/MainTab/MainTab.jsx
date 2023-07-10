import { useState } from "react";
import { Estructura } from "../Estructura/Estructura";
import { TipoDeEmpresa } from "../TipoDeEmpresa/TipoDeEmpresa";

import './styles.css'

export function MainTab() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (event) => {
    setActiveTab(event);
  };

  const tabs = [
    {
      label: 'Estructura',
      id: 1,
      component: <Estructura />,
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
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}