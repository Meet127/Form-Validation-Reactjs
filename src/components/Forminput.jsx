import "./formInput.css";

const Forminput = (props) => {

    const {label , onChange, id , ...inputProps} = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  );
};

export default Forminput;
