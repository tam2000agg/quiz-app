import React, { useState } from 'react';

function Question({ question, onAnswerSubmit }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const options = [...question.incorrect_answers, question.correct_answer];

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== '') {
      onAnswerSubmit(selectedAnswer);
    } else {
      alert('Please select an answer before submitting.');
    }
  };

  return (
    <div className="question">
      <h2>Question:</h2>
      <p dangerouslySetInnerHTML={{ __html: question?.question }} />
      <form>
        {options?.map((choice, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={choice}
                checked={selectedAnswer === choice}
                onChange={handleAnswerChange}
              />
              {choice}
            </label>
          </div>
        ))}
      </form>
      <button style={{marginTop: '20px'}} onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default Question;
