import { createStore } from "redux";
import { initialDecks } from "./Data.js";

let initialState = {
  dataDecks: initialDecks,
  deckTitle: "",
  searchQuery: "",
  deckId: "",
  idxQuestion: 0,
  userAnswer: "",
  allUserAnswers: []
};

let reducer = (state, action) => {
  if (action.type === '@@INIT') {
    return { ...state };
  }
  if (action.type === "query") {
    return { ...state, searchQuery: action.q };
  }
  if (action.type === "playDeck") {
    return { ...state, deckId: action.value, idxQuestion: 0 };
  }
  if (action.type === "choiceSelect") {
    let infoDecks = state.dataDecks;
    let Card = infoDecks[state.deckId].cards[action.idxQuestion];
    let newCard = { ...Card, userAnswer: action.userAnswer };
    Card = newCard;
    let temp = state.idxQuestion;

    if (temp < infoDecks[state.deckId].cards.length) {
      temp++;
    }

    return {
      ...state,
      idxQuestion: temp,
      userAnswer: action.userAnswer,
      dataDecks: infoDecks,
      allUserAnswers: state.allUserAnswers.concat(action.userAnswer)
    };
  }

  if (action.type === "playAgain") {
    let clearAnswers = { ...state.allUserAnswer };
    return { ...state, clearAnswers: [] };
  }

  if (action.type === "newDeckSubmit") {
    return { ...state, dataDecks: state.dataDecks.concat(action.dataDecks) };
  }

  return state;
};


let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;  