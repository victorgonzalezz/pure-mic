/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './styles.css';

import Question from '../Question'

// eslint-disable-next-line react/prop-types
export function Tabs(tabs, selectedAnswer, onChangeAnswer) {
  return (
    <>
      {tabs.map((tab) => Tab({ tab, selectedAnswer, onChangeAnswer }))}
    </>
  );
}
export function Tab({ tab, selectedAnswer, onChangeAnswer }) {
  const { title, questions } = tab;
  return (
    <>



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
          <header className="default-header">
            <h1>{title}</h1>
          </header>
          {questions.map((question, index) => Question({ question, index }))}
        </div>
      </div>


    </>
  );
}