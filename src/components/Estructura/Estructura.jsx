/* eslint-disable react/no-unescaped-entities */
import './styles.css'

import data from '../../data.json'
import { FirstQuestion } from './FirstQuestion'
import { SecondQuestion } from './SecondQuestion'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Estructura({ selectedAnswer, setSelectedAnswer, selectedAnswerSecondQuestion, setSelectedAnswerSecondQuestion }) {
  // const [selectedAnswer, setSelectedAnswer] = useState('')
  const title = data.tabs[0].tab1.title
  


  return (
    <>
      <header className="default-header">
        <h1>{title}</h1>
      </header>
      <FirstQuestion
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <SecondQuestion
        selectedAnswerSecondQuestion={selectedAnswerSecondQuestion}
        setSelectedAnswerSecondQuestion={setSelectedAnswerSecondQuestion}
      />
    
    </>
  )
}
