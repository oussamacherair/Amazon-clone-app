import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>

      {products.slice(0, 4).map(({ id, description, price, image, category, title }) =>
      (
        <Product key={id}
          id={id}
          description={description}
          price={price}
          image={image}
          title={title}
          category={category}

        />
      ))}

      <img className='md:col-span-full' src='https://rebrand.ly/ozz01' alt='' />

      <div className='md:col-span-2'>
        {products.slice(4, 5).map(({ id, description, price, image, category, title }) =>
        (
          <Product key={id}
            id={id}
            description={description}
            price={price}
            image={image}
            title={title}
            category={category}

          />
        ))}
      </div>

      {products.slice(5,products.length).map(({ id, description, price, image, category, title }) =>
        (
          <Product key={id}
            id={id}
            description={description}
            price={price}
            image={image}
            title={title}
            category={category}

          />
        ))}
    </div>
  )
}

export default ProductFeed