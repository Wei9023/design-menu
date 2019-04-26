import React from "react";
import "../../design/list.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Good", "morning", "How", "are", "you"]
    };
  }

  render() {
    return (
      <>
        <h2>Greeting</h2>
        <ul id="list">
          {this.state.items &&
            this.state.items.map((item, idx) => (
              <li key={idx}>
                <a>{item}</a>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default List;
