import "./formInput.css";

const Forminput = (props) => {

    const {label , errorMessage , onChange, id , ...inputProps} = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default Forminput;
