import * as actionTypes from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    data: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_TODOS_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case actionTypes.RECEIVE_TODOS_SUCCESS:
            return {
                fetching: false,
                fetched: true,
                data: action.todos
            };
        default:
            return state;
    }
}
