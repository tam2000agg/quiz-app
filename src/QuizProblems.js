import React, { useEffect, useState } from 'react';
import Question from './Question';
import OverviewPanel from './OverviewPanel';
import Timer from './Timer';
import { useHistory } from 'react-router-dom';

function QuizProblems({
    questions,
    setQuestions,
    userAnswers,
    setUserAnswers
}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const history = useHistory();

    useEffect(() => {
        function fetchQuestions() {
            fetch(
                'https://opentdb.com/api.php?amount=15'
            )
                .then(res => res.json())
                .then(res => setQuestions(res.results))
                .catch(err => console.log("Error In Finding Question"))
        }
        fetchQuestions();
    }, []);

    const handleAnswerSubmit = (answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = answer;
        setUserAnswers(updatedAnswers);
    };

    const goToQuestion = (questionIndex) => {
        setCurrentQuestion(questionIndex);
    };

    const handleSubmitTest = () => {
        history.push('/report');
    }

    return (
        <div className="main-content">
            <div className="overview-panel">
                <OverviewPanel
                    questions={questions}
                    currentQuestion={currentQuestion}
                    userAnswers={userAnswers}
                    goToQuestion={goToQuestion}
                />
            </div>
            <div className="content-right">
                <div className='header'>
                    <Timer />
                    <button onClick={handleSubmitTest}>Submit Test</button>
                </div>
                {questions[currentQuestion] &&
                    <Question
                        question={questions[currentQuestion]}
                        onAnswerSubmit={handleAnswerSubmit}
                    />
                }
            </div>
        </div>

    );
}

export default QuizProblems;
