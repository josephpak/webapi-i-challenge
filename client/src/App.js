import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions'
import styled from 'styled-components';

import List from './components/List'
import AddUserForm from './components/AddUserForm';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }
  
  render() {
    return (
      <AppWrapper>
        <AddUserForm/>
        {this.props.fetching ? (<p>Loading...</p>) : 
        (<List 
        users={this.props.users}
        />)}
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetching: state.fetching
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
