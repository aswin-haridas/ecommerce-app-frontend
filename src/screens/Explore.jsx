import React from 'react'
import Header from '../components/Header'

import items from '../utils/items'

function Explore() {
  return (<>
    <Header />
    <div>
      {Object.keys(items.women).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {Object.keys(items.women[category]).map((subCategory) => (
            <div key={subCategory}>
              <h3>{subCategory}</h3>
              <div>
                {items.women[category][subCategory].map((item) => (
                  <img key={item.id} src={item.src} alt="fashion item" style={{ width: '200px', margin: '10px' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div></>
  )
}

export default Explore