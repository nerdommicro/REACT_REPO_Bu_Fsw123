import Dog from "./Dog";
export default function DogList(dogs, trainDog, deleteDog) {
    const listDogs = dogs.map((dog) => {
        return (<Dog
            key={dog.id}
            dog={dog}
            trainDog={trainDog}
            deleteDog={deleteDog}
        ></Dog>)

    });

    return (
        <>
            <ul className="quarter-page">{listDogs}</ul>

        </>);
}
