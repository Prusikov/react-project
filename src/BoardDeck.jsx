
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.jsx';
import styled from 'styled-components';

const Decks = styled.div`
  
  background-color: white;
  border-radius: 5px;
  height: 120px;
  width: 200px;
  margin: 2%;
  box-shadow: 0 0 5px 2px lightgrey;
  text-align: center;
  & > #title {
    background-color: #404040;
    color: white;
    font-weight: 1000;
    padding: 10%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  & > #linkbox > #link {
    text-decoration: none;
    background-color: #2196f3;
    color: white;
    border-radius: 5px;
    width: 75%;
    padding: 2%;
    font-size: small;
  }
  & > #linkbox {
    display: flex;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
`;
class BoardDeck extends Component {
  render() {
    return (
      <>
        <Decks className='boardDeck'>
          <div id='title'>{this.props.title}</div>
          <div id='linkbox'>
            
            <Link id='link' to={'/deck/' + this.props.id}>
              Play
            </Link>
          </div>
        </Decks>
      </>
    );
  }
}
export default BoardDeck;
