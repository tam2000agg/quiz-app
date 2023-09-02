import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import Report from './Report';
import QuizProblems from './QuizProblems';
import { useHistory } from 'react-router-dom';


const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    return (
        <Router>
            <div className="Quiz">
                <Switch>
                    <Route path="/" exact component={StartPage} />
                    <Route
                        path="/quiz"
                        render={(props) => (
                            <QuizProblems {...props} questions={questions} userAnswers={userAnswers} setQuestions={setQuestions} setUserAnswers={setUserAnswers} />
                        )}
                    />
                    <Route
                        path="/report"
                        render={(props) => (
                            <Report {...props} questions={questions} userAnswers={userAnswers} />
                        )}
                    />
                    <Route path="*" component={StartPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default Quiz;