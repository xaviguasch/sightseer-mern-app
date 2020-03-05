import React from 'react'
import { useParams } from 'react-router-dom'

import Input from '../../../shared/components/FormElements/Input/Input'
import Button from '../../../shared/components/FormElements/Button/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/util/validators'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
]

const UpdatePlace = () => {
  const placeId = useParams().placeId

  const indentifiedPlace = DUMMY_PLACES.find(place => place.id === placeId)

  if (!indentifiedPlace) {
    return (
      <div className='center'>
        <h1>Could not find place</h1>
      </div>
    )
  }

  return (
    <form>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={() => {
          console.log('inserted input')
        }}
        value={indentifiedPlace.title}
        valid={true}
      />
      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (min. 5 characters)'
        onInput={() => {
          console.log('inserted description')
        }}
        value={indentifiedPlace.title}
        valid={true}
      />
      <Button type='submit' disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
