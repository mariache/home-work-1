import React from "react";

const Tab = (props) => {
  return (
    <div
      className={`tab ${
        props.tabContent.id === props.activeId ? "active" : ""
      }`}
      key={props.tabContent.id}
    >
      <input id={`tab-${props.tabContent.id}`} type="checkbox" name="tabs" />
      <label
        onClick={() => props.handleClick(props.tabContent.id)}
        htmlFor={`tab-${props.tabContent.id}`}
      >
        {props.tabContent.title}
      </label>
      <div className="tab-content">
        <p>{props.tabContent.description}</p>
      </div>
    </div>
  );
};

export default Tab;
