import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

import List from './components/List'

class App extends Component {
  
  componentDidMount(){
    this.props.fetchUsers()
  }
  
  render() {
    return (
      <div className="App">
        <List users={this.props.users}/>
      </div>
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
