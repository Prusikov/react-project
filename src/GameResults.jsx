import React, { Component } from "react";
import { connect } from "react-redux";
import FinalResults from "./FinalResults.jsx";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Decks = styled.div`
  position:center;
  flex-direction:row;
  justify-content: center;
  background-color: white;
  border-radius: 7px;
  height: 100%;
  width: 50%;
  margin: 2%;
  box-shadow: 0 0 6px 3px lightgrey;
  text-align: center;
     display: block;
  margin-left: auto;
  margin-right: auto;
  padding:30px;
  
  #question {
    background-color: #404040;
    color: white;
    font-weight: 300;
    padding: 10%;
    border-radius: 5px;
    padding:30px;
    width: auto;
    display: block;
  margin-left: auto;
  margin-right: auto;
  }  
`;


class QuizResult extends Component {
  onClickHandler = evt => {
    this.props.dispatch({
      type: "playAgain",
      allUserAnswers: this.props.propsAllUserAnswers
    });
  };
  render() {

    let deck = this.props.propsDataDecks.find(
      deck => deck.id === Number(this.props.propsDeckId)
    );
    return (
      <Decks className='boardDeck'> 
        <div>
          <div id='question'>
          <h2>Results</h2>
        </div>
        <div>
          <h2>
              <FinalResults/>
          </h2>
        </div>
        <div>
          {deck.cards.map((card,index) => {
            return (
              <div key={card.answer}>
                <h3>{card.question}</h3>
                <h4 >Answer: {card.answer}</h4>
                <h4 style={{
                  color:  card.answer  == 
                    card.choices.find(
                      choice =>
                        choice ===
                        this.props.propsAllUserAnswers[index]
                    )
                  ? 'green':'red' }}>
                  Your answer:{" "}
                  {card.choices.find(
                    choice =>
                      choice ===
                      this.props.propsAllUserAnswers[index]
                  )}
                </h4>
              </div>
            );
          })}
        </div>
        <Link
          className="btn"
          role="button"
          to="/"
          onClick={this.onClickHandler()}
        >
          Play again
        </Link>
        </div>
      </Decks>
    );
  }
}
let mapStateToProps = st => {
  return {
    propsUserAnswer: st.userAnswer,
    propsDataDecks: st.dataDecks,
    propsDeckId: st.deckId,
    propsIdxQuestion: st.idxQuestion,
    propsAllUserAnswers: st.allUserAnswers
  };
};
let GameResults = connect(mapStateToProps)(QuizResult);
export default GameResults;
