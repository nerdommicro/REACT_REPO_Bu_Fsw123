import CatList from '../components/CatList';
import {useState} from 'react';
import {listOfCats} from '../ANIMALS';
import FormAddItem from '../components/FormAddItem';
import {v4 as uuidv4 } from 'uuid';

export default function CatPage() {
    const [cats,setCats] = useState(listOfCats);
    const addCat = (nameValue, breedValue) => {
        const newCats = [ ...cats, {name: nameValue{
            id: uuidv4(),
            name: nameValue,
            breed: breedValue,
            isTrained: false
        }];
        setCats(newCats);
    };

const trainCat = id => {
    const tempCats = [...Cats];
    const index = tempCats.findIndex(cat => cat.id === id);
    tempCats[index].isTrained = !tempCats[index].isTrained;
    setCats(tempCats);
};

const deleteCat = (id) => {
    const tempCats = [...cats];
    const newCats = tempCats.filter((cat) => cat.id !== id);
    setCats(newCats);
};

return(
<>
    <h3>List of Cats to Train</h3>
    <CatList cates = {cats} trainCat={trainCat} deleteCat={deleteCat} />
    <div className = "form-area">
        <h4>Add a new cat:</h4>
        <FormAddItem addItem = {addCat} />

    </div>
    
</>
);
}