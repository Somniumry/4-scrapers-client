import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import Header from "./components/views/Header/Header";
import StoragePage from "./components/views/StoragePage/StoragePage";
import NotFound from "./components/views/NotFound/NotFound";
import "./App.css";

import axios from "axios"; //useEffect 안에서 쓰기 위해 axios import 했습니다.

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

  useEffect(() => {        //구글에서 받아온 authorization code를 백엔드에 보내서 토큰 받아오기
    async function fetchAccessToken() {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      if (authorizationCode) {
        //axios post로 "서버주소/auth/google/callback"
        //실제 deploy시에는 localhost를 ec2 서버 주소로 수정해야 함
        const { data: userdata, accessToken, message } = (await axios.post('http://localhost:5000/auth/google/callback', { authorizationCode })).data;
        console.log(userdata)
        console.log(accessToken)
        console.log(message) //리덕스에서 state에 어떻게 넣는지 몰라서 일단 콘솔로그만 찍어놨습니다.
        //userdata와 accessToken은 평소처럼 처리해주시면 됩니다.
        //쿠키로 refreshToken 들어오는것도 똑같습니다.
      }
    }
    fetchAccessToken();
  })

  return (
    <Router>
      <Header searchQuery={searchQuery} />
      <Switch>
        <Route path="/scrap">
          <StoragePage 
            news={news}
            search={Search}
            scrollHandler={scrollHandler}
            scrolls={Scrolls}
            />
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
