
import React from 'react'
import './Products.css'


const Products = ({result}) => {
  return (
    <>
      <secction className="card-container">
      {result}
      </secction>
    </>
  );
}

export default Products
