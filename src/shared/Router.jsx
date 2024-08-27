import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Router-dom API Import
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";

// Router 함수 만들고, BrowserRouter안에 Routes로 감싼다. 그 이유는 SPA의 장점인 브라우저가 깜빡이지 않고 페이지를 옮길 수 있다.
// Routers 안에 Router-dom에서 지원하는 props가 있다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* path : 주소 입력
             element : 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 입력 */}
        <Route path="/" element={<Home />} />
        <Route path="dex" element={<Dex />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
