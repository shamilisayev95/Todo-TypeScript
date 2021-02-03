import * as types from '../types/types';
import { ActionTypes } from '../actionTypes/actionTypes';

export type InitialStateType = {
    tasks: Array<types.taskType>;
};

const initialState: InitialStateType = {
    tasks: [],
};

export default (state = initialState, action: any): InitialStateType => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload],
            }
        default:
            return state
    }
}



