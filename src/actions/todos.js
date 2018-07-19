import axios from 'axios';
import * as actionTypes from './types';

export const getTodos = () => {
    return dispatch => {
        dispatch(receiveTodoRequest());
        axios
            .get('/')
            .then(res => {
                dispatch(receiveTodoSuccess(res.data));
            })
    };
};

export const addTodo = todo => {
    return (dispatch, getState) => {
        const oldTodoList = getState().todos.data;
        const newTodoList = [...oldTodoList, todo];

        dispatch(receiveTodoRequest());
        return axios
            .put('/', newTodoList)
            .then(res => {
                return dispatch(receiveTodoSuccess(res.data));
            })
    };
};

export const toggleTodo = todoId => {
    return (dispatch, getState) => {
        const oldTodoList = getState().todos.data;
        const newTodoList = oldTodoList.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }
            return { ...todo, done: !todo.done };
        });

        dispatch(receiveTodoRequest());
        return axios
            .put('/', newTodoList)
            .then(res => {
                return dispatch(receiveTodoSuccess(res.data));
            })
    };
};

export const removeTodo = todoId => {
    return (dispatch, getState) => {
        const oldTodoList = getState().todos.data;
        const newTodoList = oldTodoList.filter(todo => {
            return todo.id !== todoId;
        });
        
        dispatch(receiveTodoRequest());
        return axios
            .put('/', newTodoList)
            .then(res => {
                return dispatch(receiveTodoSuccess(res.data));
            })
    };
};

function receiveTodoRequest() {
    return {
        type: actionTypes.RECEIVE_TODOS_REQUEST
    };
}
function receiveTodoSuccess(todos) {
    return {
        type: actionTypes.RECEIVE_TODOS_SUCCESS,
        todos
    };
}
