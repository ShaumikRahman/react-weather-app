const Search = ({ handleQuery }) => {
  const validate = (e) => {
    e.preventDefault();
    let query = e.target[0].value.trim();
    query = query.replace(/\s\s+/g, " ");
    handleQuery(escape(query));
  };

  const clear = (e) => {
    handleQuery("");
  };

  return (
    <div className="app__search">
      <form
        onSubmit={(e) => validate(e)}
        onReset={(e) => clear(e)}
        className="form"
      >
        <div className="formInputContainer">
          <input
            type="text"
            name="City"
            id="city"
            placeholder="Search City"
            className="formInputContainer__input"
          />
        </div>
        <div className="formButtonsContainer">
          <button type="reset" className="formButtonsContainer__clear">
          &#10006;
          </button>
          <button type="submit" className="formButtonsContainer__submit">
          &#10004;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
