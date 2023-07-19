import { useState } from "react";
import { Estructura } from "../Estructura/Estructura";
import { Constitucion } from "../Constitucion/Constitucion";

import { Sector } from "../Sector/Sector";
import data from '../../data.json'
import './styles.css'

const initialSelectedAnswer = data.tabs[0].question.reduce((acc, question) => {
  return { ...acc, [question.id]: [] };
}, {});
 //lógica para retirar um Warning do Input



export function MainTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(initialSelectedAnswer)


  const handleTabClick = (event) => {
    setActiveTab(event);
  };

  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswer((prevSelectedAnswers) => {
      const selectedAnswerIds = prevSelectedAnswers[questionId] || [];

      if (selectedAnswerIds.includes(answerId)) {
        return {
          ...prevSelectedAnswers,
          [questionId]: selectedAnswerIds.filter((id) => id !== answerId),
        };
      } else {
        return {
          ...prevSelectedAnswers,
          [questionId]: [...selectedAnswerIds, answerId],
        };
      }
    });
  };


  
  console.log(handleAnswerChange, 'oi')

  
  
  const tabs = [
    {
      label: 'Estructura',
      id: 1,
      component: (
        <Estructura
          selectedAnswer={selectedAnswer}
          onChangeAnswer={handleAnswerChange}
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
      id: 3,
      component: <Sector />,
    },
  ];

  return (
    <div className="container">
      <div className="button-container">
        {tabs.map((tab, id) => (
          <div key={id} className="button-wrapper">
            <button
              type="button"
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