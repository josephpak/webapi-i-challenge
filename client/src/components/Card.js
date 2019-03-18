import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Card;