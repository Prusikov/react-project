import React, { Component } from "react";
import { connect } from "react-redux";


class Success extends Component {
  render() {

    let deck = this.props.propsDataDecks.find(
      deck => deck.id === Number(this.props.propsDeckId)
    );

    let correctAnswer = deck.cards.map(answer => answer.answer);   
    let allAnswers = this.props.propsAllUserAnswers;

    function getUniqueElements(element1, element2) {
      const uniqueElements = [];
      for (let i = 0; i < element1.length; i++) {
        const current = element1[i];
        let isUnique = false;
        for (let j = 0; j < element2.length; j++) {
          const other = element2[j];
          const current = element1[i];
          if (current === other) {
            isUnique = true;
            break;
          }
        }
        if (isUnique) uniqueElements.push(current);
      }
      return uniqueElements;
    }

    let points = (getUniqueElements(correctAnswer, allAnswers).length / deck.cards.length) * 100;

    if (points < 0) return <div>Does not get it at all ?</div>
    if (points < 25) return <div>Potential to get it one day ?</div>
    if (points < 50) return <div>Kind of get it ?</div>
    if (points < 75) return <div>On the road to getting it ?</div>
    if (points < 100) return <div>Almost got it! ?</div>
    if (points = 100) return <div>Got it! ? </div>
  }
};
let mapStateToProps = st => {
  return {
    
    propsDeckId: st.deckId,
    propsDataDecks: st.dataDecks,
    propsUserAnswer: st.userAnswer,
    propsRateTitle: st.rateTitle,
    propsRateCounter: st.rateCounter,
    propsAllUserAnswers: st.allUserAnswers
  };
};


let FinalResults = connect(mapStateToProps)(Success);
export default FinalResults;         