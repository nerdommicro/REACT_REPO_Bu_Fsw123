import {v4 as uuidv4} from 'uuid';

export const listOfDogs = [
    {
        id: uuidv4(),
        breed: "Poodle",
        name: "Pythagoreum",
        isTrained:true
    },
    {
        id: uuidv4(),
        breed: "Rottweiler",
        name: "Kali",
        isTrained:false
    }, 
    {
        id: uuidv4(),
        breed: "Chihuahua",
        name: "BIOS",
        isTrained:false
    } ,
    {
        id: uuidv4(),
        breed: "ChihuahuaPoo",
        name: "Andrew Cuomo",
        isTrained:false
    } 
];

export const listOfCats = [
    {
        id: uuidv4(),
        breed: "Australian Shorthair",
        name: "Bill Gates",
        isTrained:true
    },
    {
        id: uuidv4(),
        breed: "Tortoise Shell",
        name: "Hyena",
        isTrained:false
    }, 
    {
        id: uuidv4(),
        breed: "Canadian Longhair",
        name: "Moppy",
        isTrained:false
    } ,
    {
        id: uuidv4(),
        breed: "Canadian Tortoise Shell",
        name: "Ubuntu",
        isTrained:false
    } 
];