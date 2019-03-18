import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteUser } from '../actions'

const CardWrapper = styled.div`
    height: 100px;
    width: 300px;
    margin: 15px 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 10px;
`

class Card extends Component {
  
    handleDelete = e => {
        e.preventDefault();
        this.props.deleteUser(this.props.id)
    }

    render() {
    return (
      <CardWrapper>
        <div>
            <p>{this.props.name}</p>
        </div>
        <div>
            <button
            onClick={this.handleDelete}
            >Delete</button>
            <button>Update</button>
        </div> 
      </CardWrapper>
    )
  }
}

export default connect(
    null,
    { deleteUser }
)(Card);