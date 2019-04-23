import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import Sidebar from "./components/sidebar/sidebar.js";

import "./design/reset.scss";
import "./design/design.scss";

const App = () => {
  return (
    <>
      <Header title="React Design" />
      <Sidebar />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;
