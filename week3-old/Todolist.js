import React from 'react';

export default function Todolist(props) {

    return(
        props.text.map((x, index)=> {
            return(
            <li 
            key={index}>
                <input type="checkbox"></input>
                {x.text}
                completeToDo = {props.completeToDo}
                deleteToDo = {props.deleteToDo}
            </li>)
        })
    );


}