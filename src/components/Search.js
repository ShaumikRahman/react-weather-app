import FormButtonsContainer from "./FormButtonsContainer";


const Search = ({ handleQuery, toggle }) => {

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
        <FormButtonsContainer toggle={toggle} />
      </form>
    </div>
  );
};

export default Search;
