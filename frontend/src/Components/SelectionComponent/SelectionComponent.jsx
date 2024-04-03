import React from "react";

const SelectionComponent = (props) => {
  return (
    <div>
      {/* <label>{props.label}</label> */}
      <select
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      >
        <option value="">Select...</option>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {props.touched && props.error ? <div>{props.error}</div> : null}
    </div>
  );
};

export default SelectionComponent;
