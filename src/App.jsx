import { useState } from "react";

import "./../src/styles/common/reset.css";
import Header from "./features/header/Header";
import Main from "./features/main/Main";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
