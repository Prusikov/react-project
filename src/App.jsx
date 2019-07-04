
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './main.css';
import BoardComponent from './Board.jsx';
import './main.css';
import { connect } from "react-redux";
import SearchResults from "./SearchResults.jsx";
import CreateDeck from "./CreateDeck.jsx";
import DeckData from "./DeckData.jsx";
import NavBar from './NavBar.jsx';


class Application extends Component {
  renderBoard = () => {
    return (
      <>
        <BoardComponent />
      </>
    );
  };
  renderDeck = routerData => {
    const id = Number(routerData.match.params.id);
    return <Deck id={id} />;
  };

  renderDecks = () => {
    return (
      <div>
        <div>
         <SearchResults /> 
        </div>
      </div>
    );
  };
  renderCreateDeck = () => {
    return (
      <div>
        <div>
          <CreateDeck /> 
        </div>
      </div>
    );
  };
  renderPlayDeck = routerData => {
    let deckId = routerData.match.params.dId;
    this.props.dispatch({ type: "playDeck", value: deckId });
    return <DeckData />;
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div >            
            <Route exact={true} path={"/"} render={this.renderDecks} />
            <Route exact={true} path={"/createDeck"} render={this.renderCreateDeck} />
            <Route exact={true} path={"/deck/:dId"} render={this.renderPlayDeck} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
let mapStateToProps = st => {
  return {
    propsDataDecks: st.dataDecks,
    propsDeckTitle: st.deckTitle
  };
};


let App = connect(mapStateToProps)(Application);
export default App; 