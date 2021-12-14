import PropTypes from "prop-types";

const TextInputField = ({ placeholder, style, onChange, name, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      style={{ margin: "0 0 12px 0", padding: 8, ...style }}
      onChange={onChange}
    />
  );
};

TextInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TextInputField.defaultProps = {
  type: "text",
};

export default TextInputField;
