import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.jsx';
import styled from 'styled-components';
import { Route, BrowserRouter } from 'react-router-dom';


const Nav = styled.div`
  display: flex;
  background-color: #2196f3;
  height: 6vh;
  align-items: center;
  justify-content: space-around;

  & > a {
    text-decoration: none;
    color: #fff;
    font-size: small;
    margin: 15px;
  }

  & > #logo {
    
    font-size: 2rem;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }

  & input {
    flex-grow: 2;
    border-radius: 4px;
    border: none;
    height: 50%;
  }
`;

class NavBar extends Component {
  handleQuery = evt => {
    this.props.dispatch({ type: 'query', q: evt.target.value });
  };
  render() {
    return (
      <>
        <Nav className='navBar'>
          <Link id='logo' to={'/'}>GOT IT!</Link>
          <input
            type='text'
            onChange={this.handleQuery}
            value={this.props.query}
          />
          <Link to={'/'}>Home</Link>
          <Link to={'/createdeck/'}>Create deck</Link>
          <Route exact={true} path={"/"} render={this.renderDecks} />
          <Route exact={true} path={"/createDeck"} render={this.renderCreateDeck} />
          <Route exact={true} path={"/deck/:dId"} render={this.renderPlayDeck} />
        </Nav>
      </>
    );
  }
}     
         
          

const mapStateToProps = state => {
  return {
    query: state.searchQuery,
  };
};

export default connect(mapStateToProps)(NavBar);
