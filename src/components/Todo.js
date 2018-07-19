import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Checkbox, Icon } from 'semantic-ui-react';

import { toggleTodo, removeTodo } from '../actions/todos';

class Todo extends Component {
    _handleToogleTodo = id => {
        this.props.toggleTodo(id);
    };

    _handleRemoveTodo = id => {
        this.props.removeTodo(id);
    };

    render() {
        const { id, text, done } = this.props.data;
        
        return (
            <Segment className='todo-item'>
                <Checkbox
                    label={text}
                    className={done ? 'done' : ''}
                    checked={done}
                    onChange={() => this._handleToogleTodo(id)}
                />
                <button onClick={() => this._handleRemoveTodo(id)}>
                    <Icon name='trash alternate outline' />
                </button>
            </Segment>
        );
    }
}

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

export default connect(null, { toggleTodo, removeTodo })(Todo);
