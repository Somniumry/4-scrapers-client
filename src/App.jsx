import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import "./App.css";
import axios from "axios";
import Header from "./components/views/Header/Header";
import StoragePage from './components/views/StoragePage/StoragePage';

const App = ({ news }) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/scrap">
          <StoragePage />
        </Route>
        <Route path="/" exact>
          <MainPage news={news} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
