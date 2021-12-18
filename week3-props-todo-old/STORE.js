import {v4 as uuidv4} from 'uuid';

const STORE = [
    {id: uuidv4(), text: "Walk dog", isCompleted: true},
    {id: uuidv4(), text: "Do homework", isCompleted: false},
    {id: uuidv4(), text: "Go to work", isCompleted: true},
    {id: uuidv4(), text: "Come home", isCompleted: false},
    {id: uuidv4(), text: "Apply for jobs", isCompleted: false}
];
export default STORE;