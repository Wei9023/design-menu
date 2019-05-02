import React from "react";

import Card from "../card/card.js";
import "../../design/_deck.scss";

const Deck = props => {
  return (
    <section className="deck">
      <div>
        <p>{props.content.title}</p>
      </div>
      <div class="deckHolder">
        {props.content.records &&
          props.content.records.map((card, i) => (
            <Card key={i} content={card} />
          ))}
      </div>
    </section>
  );
};

export default Deck;
