import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from '../actions'

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
    state = {
        user: {
            name: this.props.name,
            bio: this.props.bio
        },
        isEditing: false
    }

    handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
  
    handleDelete = e => {
        e.preventDefault();
        this.props.deleteUser(this.props.id)
    }

    handleChanges = e => {
		this.setState({
			user: {
				...this.state.user,
				[e.target.name]: e.target.value
			}
		});
    };
    
    handleUpdate = e => {
        this.props.updateUser(this.state.user, this.props.id)
        this.setState({
			isEditing: !this.state.isEditing
		});
    } 

    render() {
    return (
      <CardWrapper>
        {!this.state.isEditing ? (
            <>
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.bio}</p>
            </div>
            <div>
                <button
                onClick={this.handleDelete}
                >Delete</button>
                <button 
                onClick={this.handleEdit}
                >Edit</button>
            </div>
            </>
        ) : (
            <>
            <div>
                <input
                    type="text"
                    name="name"
                    value={this.state.user.name}
                    placeholder="Name"
                    onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="bio"
                    value={this.state.user.bio}
                    placeholder="Bio"
                    onChange={this.handleChanges}
                />
            </div>
            <div>
                <button
                onClick={this.handleUpdate}
                >Update</button>
                <button
                onClick={this.handleEdit}
                >Cancel</button>
            </div>
            </>
        )}
      </CardWrapper>
    )
  }
}

export default connect(
    null,
    { deleteUser, updateUser }
)(Card);