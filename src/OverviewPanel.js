import React, {useState} from 'react';

function OverviewPanel({ questions, currentQuestion, userAnswers, goToQuestion }) {
    
    const [visitedQuestions, setVisitedQuestions] = useState(
        Array(questions.length).fill(false)
      );
    
      const markAsVisited = (index) => {
        const updatedVisitedQuestions = [...visitedQuestions];
        updatedVisitedQuestions[index] = true;
        setVisitedQuestions(updatedVisitedQuestions);
      };

    return (
    <div className={`overview-panel`}>
        <div className="toggle-button">
        Current Question: {currentQuestion + 1}
      </div>
    <div className="questions-list">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-item ${
              visitedQuestions[index] ? 'visited' : ''
            } ${userAnswers[index] ? 'answered' : 'unanswered'}`}
            onClick={() => {
              goToQuestion(index);
              markAsVisited(index);
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
  </div>
  );
}

export default OverviewPanel;
