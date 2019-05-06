import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
// import Sidebar from "./components/sidebar/sidebar.js";
// import List from "./components/list/list.js";
import Table from "./components/standad-table/table.js";
// import Deck from "./components/deck/deck.js";

import "./design/reset.scss";
import "./design/design.scss";
import "./design/mixins.scss";

const App = () => {
  return (
    <>
      <Header title="React Design" />
      {/* <Sidebar /> */}
      <Table />
      {/* <List /> */}
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;
