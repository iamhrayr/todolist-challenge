import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uid from 'uid';
import { Form, Input } from 'semantic-ui-react';

import { addTodo } from '../actions/todos';

class AddTodo extends Component {
    state = {
        newTodoName: '',
        isAdding: false
    };

    _handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    _handleFormSubmit = e => {
        e.preventDefault();
        this.setState({ isAdding: true });
        const newTodo = {
            id: uid(),
            text: this.state.newTodoName,
            done: false
        };
        this.props.addTodo(newTodo).then(() => {
            this.setState({
                newTodoName: '',
                isAdding: false
            });
        })
    };

    render() {
        return (
            <Form onSubmit={this._handleFormSubmit}>
                <Input
                    fluid
                    placeholder='You next todo...'
                    onChange={this._handleInputChange}
                    name='newTodoName'
                    value={this.state.newTodoName}
                    action={{ content: 'Add', color: 'teal', loading: this.state.isAdding }}
                />
            </Form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(AddTodo);
