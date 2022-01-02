import Cat from "./Cat";
export default function CatList(cats, trainCat, deleteCat) {
    const listCats = cats.map((cat) => {
        return (<Cat
            key={cat.id}
            cat={cat}
            trainCat={trainCat}
            deleteCat={deleteCat}
        ></Cat>)

    });

    return (
        <>
            <ul className="quarter-page">{listCats}</ul>

        </>);
}
