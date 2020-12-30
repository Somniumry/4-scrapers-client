import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import "./App.css";
import Header from "./components/views/Header/Header";

const App = ({ news }) => {
  const [Search, setSearch] = useState("");
  const [Scrolls, setScrolls] = useState(0);

  const searchQuery = (search) => {
    setSearch(search);
    setScrolls(0);
  };

  const scrollHandler = () => {
    setScrolls(Scrolls + 1);
  };

  return (
    <Router>
      <Header searchQuery={searchQuery} />
      <Switch>
        <Route path="/scrap">{/* <ScrapPage /> */}</Route>
        <Route path="/" exact>
          <MainPage
            news={news}
            search={Search}
            scrollHandler={scrollHandler}
            scrolls={Scrolls}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
