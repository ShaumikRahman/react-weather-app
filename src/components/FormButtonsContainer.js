const FormButtonsContainer = ({toggle}) => {

    return <div className="formButtonsContainer">
    <button className="formButtonsContainer__switch" onClick={e => toggle()}>
      &#8646;
    </button>
    <button type="reset" className="formButtonsContainer__clear">
      &#10006;
    </button>
    <button type="submit" className="formButtonsContainer__submit">
      &#10004;
    </button>
  </div>
}

export default FormButtonsContainer