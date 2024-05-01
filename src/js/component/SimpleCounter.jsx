import React, { startTransition } from "react";
import PropTypes from 'prop-types';
import stopTimer, { resumeTimer, startTimer } from "..";


const SimpleCounter = (props) => {

    function refreshPage() { 
        window.location.reload(); 
    }
    
    return (
        <>
            <div className="counter-display">
                <div className="clock-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    </svg>
                </div>
                <div className="seconds hundred-thousands">{props.hundredThousandsDigit}</div>
                <div className="seconds ten-thousands">{props.tenThousandsDigit}</div>
                <div className="seconds thousands">{props.thousandsDigit}</div>
                <div className="seconds hundreds">{props.hundredsDigit}</div>
                <div className="seconds tens">{props.tensDigit}</div>
                <div className="seconds ones">{props.onesDigit}</div>
            </div>
            <button type="button" className="btn btn-danger" onClick={stopTimer}>Stop</button>
            <button type="button" className="btn btn-success" onClick={resumeTimer}>Resume</button>
            <button type="button" className="btn btn-warning" onClick={refreshPage}>Reset</button>
        </>
    );
}

SimpleCounter.propTypes = {
    hundredThousandsDigit: PropTypes.number,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigit: PropTypes.number,
}

export default SimpleCounter;