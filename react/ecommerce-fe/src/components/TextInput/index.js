import './textInput.css';
const TextInput = ({ name, type, placeholder, error, value, onChange }) => {
  return (
    <div className='textInputContainer'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className='error'>{error}</div>
    </div>
  );
};

export default TextInput;
