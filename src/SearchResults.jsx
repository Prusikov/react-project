import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BoardDeck from './BoardDeck';


class Results extends Component {
  render = () => {
    let decks = this.props.propsDataDecks.filter(deck => {

      return deck.title.toLowerCase().includes(this.props.query.toLowerCase());
    });
    return (
      <div>
        <div>{this.props.propsDeckTitle}</div>
        <div className="rowC">
          {decks.map(deck => {return <BoardDeck id={deck.id} title={deck.title} /> })}
        </div>
      </div>
    );
  };
};

let mapStateToProps = st => {
  return {
    query: st.searchQuery,
    propsDataDecks: st.dataDecks,
    propsDeckTitle: st.deckTitle
  };
};


let SearchResults = connect(mapStateToProps)(Results);
export default SearchResults;