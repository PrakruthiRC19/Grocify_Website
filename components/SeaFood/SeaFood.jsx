// import React from 'react'

// import Banner from "../Banner/Banner"
// import Cards from "../Cards/Cards"
import CategoryPage from "../CategoryPage/CategoryPage"
import BgSeaFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <h1>
             <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meat','SeaFood']}/>
        </h1>
    </div>
  )
}

export default SeaFood