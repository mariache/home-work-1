import PropTypes from "prop-types";

const Button = ({ text, style, type }) => {
  return (
    <button
      type={type}
      style={{
        display: "inline-block",
        padding: "4px 8px",
        cursor: "pointer",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
