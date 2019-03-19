import React, { Component } from 'react'
import Card from './Card'

class List extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
            <Card {...user} />
        ))}
      </div>
    )
  }
}

export default List;