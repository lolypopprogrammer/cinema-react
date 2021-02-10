import React from 'react';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import OOP from "./pages/oop/OOP";
import LayoutTemplate from "./pages/layoutTemplate/LayoutTemplate";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*
        Параметр exact отключает частичное сопостовление маршрута и гарантирует, что вернет маршрут,
        только при полном сопостовление URL
      */}
      <Route exact path="/" component={App} />
      <LayoutTemplate title={'OOP'} path="/oop" component={OOP} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
