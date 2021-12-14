import PropTypes from "prop-types";

const flexProperties = {
  vertical: "column",
  horizontal: "row",
};

const flexJustifyProperties = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const flexAlignItemsProperties = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
};

const FlexBox = ({
  direction,
  children,
  gap,
  justifyContent,
  alignItems,
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexProperties[direction],
        justifyContent: flexJustifyProperties[justifyContent],
        alignItems: flexAlignItemsProperties[alignItems],
        margin: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  justufyContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
  ]),
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
  ]),
  gap: PropTypes.number,
};

FlexBox.defaultProps = {
  direction: "vertical",
};

export default FlexBox;
