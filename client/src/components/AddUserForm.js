import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { createUser } from "../actions"

const FormWrapper = styled.div`
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

class AddUserForm extends Component {
    state = {
        user: {
            name: "",
            bio: ""
        }
    }

    handleChanges = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    handleCreate = e => {
        this.props.createUser(this.state.user)
    }
  
    render() {
        return (
            <FormWrapper>
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
                onClick={this.handleCreate}
                >Create</button>
            </div>
            </FormWrapper>
        )
  }
}

export default connect(
    null,
    { createUser }
)(AddUserForm);