import FormGiphySearch from "../components/FormSearchGiphy";

export default function SearchGiphyPage() {
    return (
        <>
            <h3>Search Giphys</h3>
            <div className="form-area">
                <FormGiphySearch initalQuery="dog chasing squirrel" />
            </div>
        </>
    );
}
