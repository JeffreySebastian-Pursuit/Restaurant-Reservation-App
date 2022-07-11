import React from 'react'
import Restaurants from '../componets/Restaurants'
import '../pages/Index'

function Index({restaurants, loading}) {
  return (
    
    <div className='Index'>
      <section >
        <Restaurants  restaurants={restaurants} loading={loading}/>
      </section>
    </div>
  )
}

export default Index