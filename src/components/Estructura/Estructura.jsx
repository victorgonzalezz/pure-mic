/* eslint-disable react/no-unescaped-entities */
import './styles.css'

import data from '../../data.json'

import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Estructura() {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerSecondQuestion, setSelectedAnswerSecondQuestion] = useState('')
  const title = data.tabs[0].tab1.title

  const questionOne = data.tabs[0].tab1.content[0].questionOne
  const answerOptions = data.tabs[0].tab1.content[0].answer;

  const questionTwo = data.tabs[0].tab2.content[0].questionTwo
  const answerOptionsTwo = data.tabs[0].tab2.content[0].answer;

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const handleRadioChangeTwo = (event) => {
    setSelectedAnswerSecondQuestion(event.target.value);
  };



  return (
    <>
      <header className="default-header">
        <h1>{title}</h1>
      </header>
      <div>
        <div>
          <legend>{questionOne}</legend>
        </div>
        <div>
          {answerOptionsTwo.map(({ id, text }) => (
            <div key={id}>
              <input
                type="radio"
                id={id}
                name={questionOne}
                value={text}
                checked={selectedAnswer === text}
                onChange={handleRadioChange}
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>
        <div>
          <legend>{questionTwo}</legend>
        </div>
        <div>
          {answerOptions.map(({ id, text }) => (
            <div key={id}>
              <input
                type="checkbox"
                id={id}
                name={questionTwo}
                value={text}
                checked={selectedAnswerSecondQuestion === text}
                onChange={handleRadioChangeTwo}
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>
      </div>
  
    </>
  )
}
