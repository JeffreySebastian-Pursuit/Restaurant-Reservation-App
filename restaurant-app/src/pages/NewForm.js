import React from 'react'
import AddRestaurant from '../componets/AddRestaurant'

function NewForm() {
  return (
    <div className='New'>
          <div>

Add New Restaurant
</div>
        <AddRestaurant />
    </div>
  )
}

NewForm.propTypes = {}

export default NewForm
