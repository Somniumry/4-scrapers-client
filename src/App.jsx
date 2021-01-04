import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import Header from "./components/views/Header/Header";
import StoragePage from "./components/views/StoragePage/StoragePage";
import NotFound from "./components/views/NotFound/NotFound";
import "./App.css";

const App = ({ news }) => {
  const [Search, setSearch] = useState("속보");
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
        <Route path="/scrap" exact>
          <StoragePage news={news} />
        </Route>
        <Route path="/" exact>
          <MainPage
            news={news}
            search={Search}
            scrollHandler={scrollHandler}
            scrolls={Scrolls}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
