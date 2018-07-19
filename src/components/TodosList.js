import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Loader } from 'semantic-ui-react';

import Todo from './Todo';
import { getTodos } from '../actions/todos';

class TodosList extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    _renderTodosList(todos) {
        return todos.map(todo => {
            return <Todo key={todo.id} data={todo} />;
        });
    }

    render() {
        const { todos } = this.props;

        if (todos.fetching && !todos.fetched) {
            return ( 
                <Segment className='loader-wrap'>
                    <Loader active />
                </Segment>
            );
        }

        return <Segment.Group>{this._renderTodosList(todos.data)}</Segment.Group>;
    }
}

TodosList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { getTodos })(TodosList);
