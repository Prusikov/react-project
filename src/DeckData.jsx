import React, { Component } from "react";
import { connect } from "react-redux";
import "./main.css";
import GameResults from "./GameResults.jsx";
import styled from 'styled-components';
//import { Progress } from 'reactstrap';
//import ProgressBar from 'react-bootstrap/ProgressBar';

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
    width: 40%;
    display: block;
  margin-left: auto;
  margin-right: auto;
  }
  
  #answ {
    padding:10px;
    display: flex;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
  #answ > #buttons {
    text-decoration: none;
    background-color: #2196f3;
    color: white;
    border-radius: 5px;
    width: 50%;
    padding: 2%;
    font-size: small;
  }

  .progress-bar {
  position: relative;
  height: 10px;
  width: 49%;
  padding: .5%;
       display: block;
  margin-left: auto;
  margin-right: auto;
}

.filler {
  background: #2196f3;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
}
`;

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

class DeckData extends Component {
  onClickHandler = evt => {
    this.props.dispatch({
      type: "choiceSelect",
      userAnswer: evt.target.value,
      idxQuestion: this.props.propsIdxQuestion
    });
  };
  render = () => {
    
    let deck = this.props.propsDataDecks.find(
      deck => deck.id === Number(this.props.propsDeckId)
    );
    if (!deck) return <div>Unknown deck</div>;


    if (this.props.propsIdxQuestion < deck.cards.length) {
      let currentCard = deck.cards[this.props.propsIdxQuestion];
      return (
        <Decks className='boardDeck'> 
          <div key={this.props.propsDeckId}>
            <div id='question'>{currentCard.question}</div>
            <ProgressBarExample />
          {currentCard.choices.map(choice => (
            
            <div id='answ' key={choice}>
              <input id='buttons'
                type="button"
                value={choice}
                onClick={this.onClickHandler}
            />
            </div>
          ))}
          </div>
          </Decks>
      );
    } else {
      return <div>{<GameResults />}</div>;
    }
  };
}
let mapStateToProps = st => {
  return {
    propsDataDecks: st.dataDecks,
    propsDeckId: st.deckId,
    propsAllUserAnswers: st.allUserAnswers,
    propsIdxQuestion: st.idxQuestion,
    propsUserAnswer: st.userAnswer,
  };
};
let DecksData = connect(mapStateToProps)(DeckData);
export default DecksData;



class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage: 15
    }
    this.nextStep = this.nextStep.bind(this)
  }

  nextStep() {
    if (this.state.percentage === 100) return
    this.setState({ percentage: this.state.percentage + 20 })
  }
  render() {
    return (
      
      <div>
       
        <ProgressBar percentage={this.state.percentage} />
          {/* {<button
            onClick={this.nextStep}
          >
            Next Step
          </button>} */}
      </div>
    )
  }
} 