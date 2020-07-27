import React, { useReducer } from 'react';

import './Input.css';

const inputReduser = (state, action) => {
  switch (action.type) {
    case 'CHANGH':
      return {
        ...state,
        value: action.val,
        isValide: true
      }
    default:
    return state; 
  }
}

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReduser, {value: '', isValide:false});

  const changeHandler = event => {
    dispatch({ type: 'CHANGH', val: event.target.value });
  }

  const element =
    props.element === 'input' ? (
      <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler} 
        value={inputState.value}
      />
    ) : (
      <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        value={inputState.value} 
      />
    );

  return (
    <div className={`form-control ${!inputState.isValide && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValide && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
