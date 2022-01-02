import DogList from '../components/DogList';
import {useState} from 'react';
import {listOfDogs} from '../ANIMALS';
import FormAddItem from '../components/FormAddItem';
import {v4 as uuidv4 } from 'uuid';

export default function DogPage() {
    const [dogs,setDogs] = useState(listOfDogs);
    const addDog = (nameValue, breedValue) => {
        const newDogs = [ ...dogs, {name: nameValue{
            id: uuidv4(),
            name: nameValue,
            breed: breedValue,
            isTrained: false
        }];
        setDogs(newDogs);
    };

const trainDog = id => {
    const tempDogs = [...dogs];
    const index = tempDogs.findIndex(dog => dog.id === id);
    tempDogs[index].isTrained = !tempDogs[index].isTrained;
    setDogs(tempDogs);
};

const deleteDog = (id) => {
    const tempDogs = [...dogs];
    const newDogs = tempDogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
};

return(<>
    <h3>List of Dogs to Train</h3>
    <DogList dogs = {dogs} trainDog={trainDog} deleteDog={deleteDog} />
    <div className = "form-area">
        <h4>Add a new dog:</h4>
        <FormAddItem addItem = {addDog} />

    </div>
    
</>
);
