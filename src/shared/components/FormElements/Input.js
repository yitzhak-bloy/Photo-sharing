import React, { useReducer } from 'react';

import { validate } from '../../util/validators'
import './Input.css';

const inputReduser = (state, action) => {
  switch (action.type) {
    case 'CHANGH':
      return {
        ...state,
        value: action.val,
        isValide: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
    return state; 
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReduser, {
    value: '',
    isTouched: false, 
    isValide:false
  });

  const changeHandler = event => {
    dispatch({ 
      type: 'CHANGH', 
      val: event.target.value, 
      validators: props.validators 
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler} 
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={changeHandler} 
        onBlur={touchHandler}
        value={inputState.value} 
      />
    );

  return (
    <div className={`form-control ${!inputState.isValide && inputState.isTouched && 
      'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValide && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
