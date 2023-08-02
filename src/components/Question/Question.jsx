/* eslint-disable react/prop-types */
import './styles.css';

const Option = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id: qid, type, item, allAnswers, setAllAnswers } = props;
  // eslint-disable-next-line react/prop-types
  const { id, text } = item;

  const hasId = (obj, key) => Object.keys(obj).pop() === key;  // [ "1" ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const answer = type === 'checkbox' ? checked : value;

    /*
    sem respostas
    [
      { "1": ""},
      { "2": [] },
      { "3": [] }
    ]

    com respostas
    [
      { "1": "1.2"},
      { "2": ["2.1", 2.2"] },
      { "3": ["3.2", "3.4"] }
    ]
    */


    // Comentários supondo ID = 2
    // seleciolar a resposta da questão corrente     { "2": ["2.1", 2.2"] }
    const answersCurrentQuestion = allAnswers.filter((answer) => hasId(answer, qid)); // ??

    if (type === 'radio') {
      // Suponso id = "1", trantando a resposta da questão para radio { "1": "1.2"} ou { "1": ""} ou {"1", ""}com string na resposta
      answersCurrentQuestion[id] = answer ? id : '';
    }
    else {
      //trantando a resposta da questão para checkbox  { "2": ["2.1", 2.2"] } com array na resposta
      let answers = answersCurrentQuestion[id].filter((option) => option !== name); // othersAnswers  ["2.1", 2.2"]
      if (answer)
        answers = [...answers, id]; // allAnswers = othersAnswers + currentAnswer (id) "2.4"  =>  ["2.1", 2.2", "2.4"]
      //answers.push(id);

      answersCurrentQuestion[id] = answers;  // { "2" : ["2.1", 2.2", "2.4"] }
    }

    // obtem todas as respostas sem a resposta da questão corrente
    const othersQuestionsAnswers = selectedAnswerIds.filter((answer) => answer[id] !== id);
    /*
       [
        { "1": "1.2"},
        { "3": ["3.2", "3.4"] }
      ]
      */
    const allQuestionsAnswers = [...othersQuestionsAnswers, answersCurrentQuestion];
    /*
       [
        { "1": "1.2"},
        { "2": ["2.1", 2.2", "2.4"] },
        { "3": ["3.2", "3.4"] }
      ]
      */
    setAllAnswers(allQuestionsAnswers);
    /*
    const answers
    [
      { "1": "1.2"},  // radio
      { "2": ["2.1", 2.2"] },  // checkbox
      { "3": ["3.2", "3.4"] }
    ]
    */
  };

  const answersCurrentQuestion = allAnswers.filter((answer) => hasId(answer, qid)); // ??
  const currentAnswer = type === 'checkbox' ? answersCurrentQuestion[qid]?.includes(id) : answersCurrentQuestion[qid] === id;
  return (
    <div key={`"key-${id}"`}>
      <input
        type={type}
        id={id}
        name={qid}
        value={id}
        checked={currentAnswer}
        onChange={() => handleChange(qid, id)}
      />
      <label htmlFor={id}>{text}</label>
    </div>);
}

// eslint-disable-next-line react/prop-types
export function Question(props) {
  const { question, allAnswers, setAllAnswers } = props;
  const { title, id, type, items } = question;

  return (
    <>
      <div key={id}>
        <div>
          <legend>{`${index + 1}. ${title}`}</legend>
        </div>
        <div>
          {items.map((item) => Option({ id, type, item, selectedAnswer, onChangeAnswer }))}
        </div>
      </div>
    </>
  );
}