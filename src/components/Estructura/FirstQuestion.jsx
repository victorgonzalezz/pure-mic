import data from '../../data.json'


// eslint-disable-next-line react/prop-types
export function FirstQuestion({selectedAnswer, setSelectedAnswer}) {
  const questionOne = data.tabs[0].tab1.content[0].questionOne
  const answerOptions = data.tabs[0].tab1.content[0].answer;

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <legend>{questionOne}</legend>
        </div>
        <div>
          {answerOptions.map(({ id, text }) => (
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
      </div>

    </div>
  )
}
