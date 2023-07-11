import './styles.css'
import data from '../../data.json'
import { useState } from 'react'

export function Estructura() {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerSecondQuestion, setSelectedAnswerSecondQuestion] = useState('')

  const dataTabs = data.tabs
  const dataTitle = dataTabs[0].title
  const dataQuestions = dataTabs[0].content

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value)
  }

  const handleCheckboxChange = (event) => {
    setSelectedAnswerSecondQuestion(event.target.value)
  }

  return (
    <>
      <header className="default-header">
        <h1>{dataTitle}</h1>
      </header>
      {dataQuestions.map((question, index) => (
        <div key={question.id}>
          <div>
            <legend>{`${index + 1}. ${question.question}`}</legend>
          </div>
          <div>
            {question.answer.map((answer) => (
              <div key={answer.id}>
                {question.type === 'radio' ? (
                  <div>
                    <input
                      type="radio"
                      id={answer.id}
                      name={question.id}
                      value={answer.text}
                      checked={selectedAnswer === answer.text}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor={answer.id}>{answer.text}</label>
                  </div>
                ) : (
                  <div>
                    <input
                      type="checkbox"
                      id={answer.id}
                      name={question.id}
                      value={answer.text}
                      checked={selectedAnswerSecondQuestion === answer.text}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={answer.id}>{answer.text}</label>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
