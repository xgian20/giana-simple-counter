import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";
import "../styles/simplecounter.css";

import Home from "./component/home.jsx";

let counter = 0;
let counterInterval = null; 

function renderHome() {
    ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
    counter++;
}

function stopTimer() {
    if (counterInterval) {
        clearInterval(counterInterval);
        counterInterval = null; 
    }
}

function startTimer() {
    if (!counterInterval) { 
        counterInterval = setInterval(renderHome, 1000);
    }
}

startTimer();

export default stopTimer;
export { startTimer as resumeTimer }; 
