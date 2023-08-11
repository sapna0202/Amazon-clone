import React from 'react'

function ProductSlider({ id, title, image, price, rating }) {
  return (
      <>
          <div className='bg-white   p-1'>
              <img className=' object-contain min-w-[200px] h-[200px]' src={image} alt="" srcset="" />
          </div>
      
    </>
  )
}

export default ProductSlider
