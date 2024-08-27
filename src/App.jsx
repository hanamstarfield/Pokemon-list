import React from "react";
import Router from "./shared/Router";

// Router 컴포넌트를 App.jsx에 넣어야 하는 이유는 우리가 만든 프로젝트에서 가장 최상위에 존재하는 컴포넌트이기 때문.
// 어떤 컴포넌트를 띄우든 항상 App.jsx 를 거쳐가야 한다.
const App = () => {
  return <Router />;
};

export default App;
