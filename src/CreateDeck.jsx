import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { initialDecks } from "./Data.js";
import { BrowserRouter } from 'react-router-dom'

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
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
 
   #buttons {
    text-decoration: none;
    margin-top: 20px;
    border-radius: 5px;
    width: 100%;
    padding: 2%;
    font-size: small;
      position:center;
    flex-direction:row;
    justify-content: center;
  }
  .buttonSubmit
  {
    margin-top: 200px;
    background-color: #2196f3;
    color: white;

  }
  .buttonAdd
  {
    padding: 2%;
    background-color: white;
    color:black;
    
  }
  #inputTitle{
    display: block;
    text-align: left;
    padding: 2%;
    font-weight: 300;
  }
  #inputbox{
    border:1px solid black;
    border-radius: 5px;
    width: 100%;
    margin:auto;
    height:35px;
    position:center;
    flex-direction:row;
    justify-content: center;
  }

#addCard{
       border:1px solid black;
      border-radius: 5px;
       display: block;
       padding: 30px; 
       margin-bottom: 50px;
       display: block;  
       text-shadow: 0 0 1px black;
}


} 

#addCard label{
  margin-top:50px;
  //padding: 50px;  
  margin-left: auto;
  margin-right: auto;
  
}

.buttonChoice{
     display: block;   
     border:1px solid grey;
      border-radius: 5px;
      width:130px !important;
      background-color: white;
      padding: 10%;
       margin-left: auto;
  margin-right: auto;
  }
.checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

.checkbox-round:checked {
    background-color: #2196f3;
}

`;

class NewDeck 
{
  constructor(id, title,cards) {
    this.id = id;
    this.title = title;
    this.cards = cards;
  }
}
class Cards {
  constructor(question,choises,answer) {
    this.question = question;
    this.choises = choises;
    this.answer = answer;
  }
}


class CreatingGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addClicked: false,
      addChoiceClicked: false,
      removeChoiceClicked: false,
      rightAnswer: '',
      dataDecks: initialDecks,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.id;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : target.value
    });
    // this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
   // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
      
    let title, question, a1, a2, a3, rightAnswer;
    let choice = [];
    
    
    let cards = new Cards();
    let newDeck = new NewDeck();
    

    let cardsArray = [];
    let deckArray = [];

   

    if (event.target["inputbox"])
      title = event.target["inputbox"].value;
    else {
      return(alert('Field Title should not be empty'))
    }
      
    
    if (event.target["q"] && event.target["q"].value != "")
      question = event.target["q"].value;
    else
      return (alert('Field Question should not be empty'))
    
    if (event.target["a1"] && event.target["a1"].value != "")
    {
      a1 = event.target["a1"].value;
      choice.push(a1);
    }
      
    else
      return (alert('Field Answer 1 should not be empty'))
    
    if (event.target["a2"] && event.target["a2"].value != "")
    {
      a2 = event.target["a2"].value;
      choice.push(a2);
    }
   
   
    if (this.state.id3) {
      a3 = event.target["a3"].value;
      choice.str3 = a3;
      choice.push(a3);
    }

   

    rightAnswer = event.target["id1"].value ?
      event.target["a1"].value : (event.target["id2"].value ?
        event.target["a2"].value : ((event.target["id3"] && event.target["id3"].value) ?
          a3 = event.target["a3"].value : ""))

    
    // // set new dck
    //  cards.choises = choice;
    //  cards.question = question;
    //  cards.answer = rightAnswer;

    //  newDeck.cards = cards;
    //  newDeck.title = title;
    //  newDeck.id = this.state.dataDecks.length + 3;


    
    cardsArray.push({
      question: question,
      choises: choice,
      answer: rightAnswer
    });

    cardsArray.push({
      question: question,
      choises: choice,
      answer: rightAnswer
    });

    
    // deckArray.push({
    //   cards: cardsArray,
    //   title: title,
    //   id: this.state.dataDecks.length + 1
    // });

    this.state.dataDecks.push({
      id: this.state.dataDecks.length + 1,
      title: title,
      cards: cardsArray
      
    });

    console.log(this.state.dataDecks);
    // alert('choice: ' + choice);
    
    alert('new Deck Created');
  }
  handleAdd(event) {
    this.setState({
      addClicked: true
    })
    // alert('Add button clicked: ' + this.state.addClicked);
    // event.preventDefault();

  };

  handleChoice(event) {
    if (event.target.value == 'Add choice')
      this.setState({
        addChoiceClicked: true,
        removeChoiceClicked: false
      })
    else
      this.setState({
        addChoiceClicked: false,
        removeChoiceClicked: true
      })

   // alert('Choice button clicked: ' + this.state.addClicked);
    // event.preventDefault();

  }

  render = () => {

    return (
      <Decks className='boardDeck'>
        <form onSubmit={this.handleSubmit}>
          <div id='question'>Create deck</div>
          <label id='inputTitle'>
            Title
           <input  id='inputbox' value={this.state.inputbox} onChange={this.handleChange} />
          </label>
          {

            this.state.addClicked ?
              <div id='addCard'>
                <label>
                  Question:
                
                </label><br></br><input id="q" value={this.state.q} onChange={this.handleChange} />
                <br></br>

                <label >
                  <span >Answer Choice 1: <br></br>
                    <div>
                      <input className="checkbox-round" type="checkbox" id="id1" checked={this.state.id1} onChange={this.handleChange} value={this.state.id1}/>
                      <label htmlFor="rightAnsw">Mark As Answer</label>
                    </div>
                  </span>
                  <input id="a1" value={this.state.a1} onChange={this.handleChange} />
                </label><br></br>
                <label>
                  Answer Choice 2:
                   <div>
                    <input type="checkbox" className="checkbox-round" id="id2" checked={this.state.id2} onChange={this.handleChange} value={this.state.id2}/>
                    <label htmlFor="rightAnsw">Mark As Answer</label>
                  </div>
                <input  id="a2" value={this.state.a2} onChange={this.handleChange} />
                </label><br></br>
                <div>
                  {
                    this.state.addChoiceClicked ?
                      <label>
                        Answer Choice 3:
                         <div>
                          <input type="checkbox" className="checkbox-round" id="id3" checked={this.state.id3} onChange={this.handleChange} value={this.state.id3}/>
                          <label htmlFor="rightAnsw">Mark As Answer</label>
                        </div>
                      <input  id="a3" value={this.state.a3} onChange={this.handleChange} />
                      </label>
                      :
                      <div></div>
                  }
                  <input id='buttons' className='buttonChoice' type="button" value='Remove choice' onChange={this.handleChange} onClick={this.handleChoice} />
                  <input id='buttons' className='buttonChoice' type="button" value='Add choice' onChange={this.handleChange} onClick={this.handleChoice} />
                </div>
              </div>
              :
              <div></div>

          }
          <input id='buttons' className='buttonAdd' type="button" value='Add Card' onChange={this.handleChange} onClick={this.handleAdd} />
          <input type="submit" value="Submit" id='buttons' className='buttonSubmit' />
        </form>

      </Decks>
    )
    createCard = evt => {

    };
  }
}

let mapStateToProps = st => {
  return {
    query: st.searchQuery,
    propsDataDecks: st.dataDecks,
    propsDeckTitle: st.deckTitle
  };
};

let CreateDeck = connect(mapStateToProps)(CreatingGame);
export default CreateDeck;       