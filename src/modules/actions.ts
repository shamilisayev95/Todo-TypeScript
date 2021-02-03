import { ActionTypes } from '../actionTypes/actionTypes';
import * as types from '../types/types';

export type AddTaskType = {
    type: ActionTypes.ADD_TASK;
    payload: types.taskType;
}

export const onAddTask = (payload: types.taskType): AddTaskType => ({
    type: ActionTypes.ADD_TASK,
    payload,
})