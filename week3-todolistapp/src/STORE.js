import {v4 as uuidv4} from 'uuid';

const TodosArray = [
    {
        id: uuidv4(), 
        text: "Walk dog", 
        isCompleted: true
    },
    {
        id: uuidv4(), 
        text: "Do React homework", 
        isCompleted: false
    },
    {
        id: uuidv4(), 
        text: "Go to work", 
        isCompleted: true
    },
    {
        id: uuidv4(), 
        text: "Ship out my orders", 
        isCompleted: false
    },
    {
        id: uuidv4(), 
        text: "Apply for jobs", 
        isCompleted: false
    },
    {
        id: uuidv4(), 
        text: "Play on hack the box", 
        isCompleted: false
    }
];

export default TodosArray