
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.jsx';
import styled from 'styled-components';
import BoardDeck from './BoardDeck.jsx';

const Board = styled.div`
  background-color: #f0f0f0;
  display: flex;
  height: 100vh;
`;

class BoardComponent extends Component {
  render() {
    let results = this.props.decks.filter(deck => {
      return deck.title.toLowerCase().includes(this.props.query.toLowerCase());
    });
    return (
      <Board>
        {results.map(deck => (
          <BoardDeck id={deck.id} title={deck.title} />
        ))}
        </Board>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decks,
    query: state.searchQuery,

  };
};

export default connect(mapStateToProps)(BoardComponent);
