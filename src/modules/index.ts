import Component from './TodoList';
import * as actions from './actions';
import * as selectors from './selectors';
import { connect } from 'react-redux';
import { taskType } from '../types/types';

const mapStateToProps = (state: taskType) => ({
    tasks: selectors.getAllTask(state)
});

const mapDispatchToProps = (dispatch: any) => ({
    addTask: (task: any) => dispatch(actions.onAddTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
