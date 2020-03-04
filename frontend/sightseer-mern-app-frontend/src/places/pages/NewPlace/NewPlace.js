import React, { useCallback } from 'react'

import Input from '../../../shared/components/FormElements/Input/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/util/validators'
import './NewPlace.css'

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {
    console.log(id, value, isValid)
  }, [])
  const descriptionInputHandler = useCallback((id, value, isValid) => {
    console.log('description')
    console.log(id, value, isValid)
  }, [])

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={titleInputHandler}
      />
      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (at least 5 characters)'
        onInput={descriptionInputHandler}
      />
    </form>
  )
}

export default NewPlace
