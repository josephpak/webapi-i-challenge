import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions'
import styled from 'styled-components';

import List from './components/List'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;      
`

class App extends Component {
  
  componentDidMount(){
    this.props.fetchUsers()
  }
  
  render() {
    

    return (
      <AppWrapper>
        <List users={this.props.users}/>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
