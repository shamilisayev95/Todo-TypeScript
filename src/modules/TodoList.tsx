import React, {useState} from 'react';
import ToDoItem from './components/TodoItem';
import * as types from '../types/types';

const TodoList = (props: any) => {
    const{
        addTask,
        tasks
    } = props

    console.log(addTask);
    

    const [inputText, setInputText] = useState("");

    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    const saveTask = () => {
        const task: types.taskType = {
            id: Date.now(),
            text: inputText,
            isDone: false,
        }
        addTask(task);
        setInputText('');
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
                <div className="form">
                    <input type='text'
                           value={inputText} 
                           onChange={handleChange}       
                    />
                    <button onClick={saveTask}
                    >
                    <span>Add</span>
                    </button>
                </div>
            <div>
                <ul>
                        <ToDoItem />
                    </ul>
            </div>
      </div>
    )
} 

export default TodoList;