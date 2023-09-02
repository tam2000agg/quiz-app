import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function StartPage() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    if(email){
    localStorage.setItem('email', JSON.stringify(email));
    history.push('/quiz');
    }
    else
    alert('Enter your email');
  };

  return (
    <div className="start-page">
      <h1>Welcome to the Quiz App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="start-button">Start Quiz</button>
      </form>
    </div>
  );
}

export default StartPage;
