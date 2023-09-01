import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
                history.push('/report');
            } else {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [minutes, seconds, history]);

    return (
        <div className="timer">
        <p className="timer-text">
          Time Remaining: {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
    );
};
export default Timer;