import {v4 as uuidv4} from 'uuid';

export const todoList = [
    {
        id: uuidv4(),
        text: "Wake up",
        isComplete: true
    },
    {
        id: uuidv4(),
        text: "Let dogs out",
        isComplete: false
    },
    {
        id: uuidv4(),
        text: "Feed dogs",
        isComplete: true
    },
    {
        id: uuidv4(),
        text: "Ship out my orders",
        isComplete: false
    },
    {
        id: uuidv4(),
        text: "Apply for jobs",
        isComplete: false
    },
    {
        id: uuidv4(),
        text: "Play on hack the box",
        isComplete: false
    }
];