import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IndecisionApp from './components/IndecisionApp';
import './styles/style.scss';
import 'normalize.css/normalize.css'
ReactDOM.render(<IndecisionApp />,document.getElementById('root'));




//setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
