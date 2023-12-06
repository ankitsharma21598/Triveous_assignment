import React from 'react';
import '../inputcontrol/inputcontroll.css';

const InputControll = (props) => {
  return (
    <div className="input-container">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
};

export default InputControll;
