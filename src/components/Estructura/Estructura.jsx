import './styles.css';
import data from '../../data.json';

// eslint-disable-next-line react/prop-types
export function Estructura({ selectedAnswer, onChangeAnswer }) {
  const dataTabs = data.tabs;
  const dataTitle = dataTabs[0].title;
  const dataQuestions = dataTabs[0].question;

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
                      checked={selectedAnswer[question.id]?.includes(answer.id)}
                      //preciso entender melhor o que está a ocorrer dentro do checked
                      //Sobre o ? Verificar final do arquivo.
                      onChange={() => onChangeAnswer(question.id, answer.id)}
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
                        checked={selectedAnswer[question.id]?.includes(answer.id)}
                      onChange={() => onChangeAnswer(question.id, answer.id)}
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
  );
}
//o operador de coalescência nula (?.) é uma forma de verificação de nulidade ou
// indefinição de um valor antes de acessar uma propriedade ou chamar um método.

//Ele pode ser usado para evitar erros de exceção quando tentamos acessar
// propriedades ou métodos em valores que podem ser null ou undefined.