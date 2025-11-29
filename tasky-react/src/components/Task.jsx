import React from 'react';

const Task = (props) => {

   
   const getPriorityColor = (priority) => {
        switch (priority) {
            case "Low":
                return "#7bc47f"; // Low = green
            case "Medium":
                return "#f7d067"; // Medium = yellow
            case "High":
                return "#e57373"; // High = red
            default:
                return "#5bb4c4";
        }
    }


    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <p className='priority' style={{ backgroundColor: getPriorityColor(props.priority) }}> {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
}

export default Task;