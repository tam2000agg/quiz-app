import { useHistory } from 'react-router-dom';

function Report({ questions, userAnswers }) { // Receive props as arguments
  const history = useHistory();

    if(!localStorage.getItem('email'))
    history.push('/');

    return (
    <div className="report">
      <h1>Quiz Report</h1>
      <table className="report-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td dangerouslySetInnerHTML={{ __html: question?.question }} />
              <td>{userAnswers[index]}</td>
              <td>{question.correct_answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;


