const Search = ({handleQuery}) => {

    const validate = (e) => {
        e.preventDefault();
        let query = e.target[0].value.trim();
        query = query.replace(/\s\s+/g, ' ');
        handleQuery(escape(query));
    }

    const clear = (e) => {
        handleQuery('');
    }

    return (
        <div className="App__Search">
            <form onSubmit={e => validate(e)} onReset={e => clear(e)}>
                <input type="text" name="City" id="city" placeholder="Search..."/>
                <button type="submit">Go</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}

export default Search