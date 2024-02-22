import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Colors/Color'

import React from 'react'

const Sidebar = () => {
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1>🛒</h1>
    </div>
    <Category/>
    <Price/>
    <Color/>
  </section>
  </>
}

export default Sidebar
