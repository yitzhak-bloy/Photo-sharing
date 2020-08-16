import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );

  return (
    <form className="place-form">
      <Input
        id="mail"
        element="input"
        type="text"
        label="Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid mail."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="text"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(8)]}
        errorText="Please enter a valid password."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>)
};

export default Auth;