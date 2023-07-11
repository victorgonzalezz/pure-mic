import data from '../../data.json'


// eslint-disable-next-line react/prop-types
export function SecondQuestion({selectedAnswerSecondQuestion, setSelectedAnswerSecondQuestion}) {
  const questionTwo = data.tabs[0].tab2.content[0].questionTwo
  const answerOptions = data.tabs[0].tab2.content[0].answer;

  const handleRadioChange = (event) => {
    setSelectedAnswerSecondQuestion(event.target.value);
  };

  return (
    <div>
      <div>
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
                onChange={handleRadioChange}
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
