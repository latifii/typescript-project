import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { Product } from '../../models/Product'
import ProductItem from './components/ProductItem'

const productInitialValue: Array<Product> = [
  {
    id: 1,
    title: 'Iran 207',
    price: '750',
    colors: ['white', 'red', 'block'],
    editMode: false,
  },
  {
    id: 2,
    title: 'HP Pavilion',
    price: '1100',
    colors: ['black', 'silver'],
    editMode: false,
  },
  {
    id: 3,
    title: 'Levono 7850',
    price: '1200',
    colors: ['yellow', 'black', 'silver'],
    editMode: false,
  },
  {
    id: 4,
    title: 'Apple Macbook',
    price: '1850',
    colors: ['black', 'silver'],
    editMode: false,
  },
  {
    id: 5,
    title: 'Surface 128',
    price: '1500',
    colors: ['red'],
    editMode: false,
  },
  {
    id: 6,
    title: 'Dell 8050',
    price: '1300',
    colors: ['blue', 'black'],
    editMode: false,
  },
  {
    id: 7,
    title: 'Toshiba 7450',
    price: '800',
    colors: ['red', 'black', 'silver'],
    editMode: false,
  },
]

const Products = () => {
  // State Products
  const [products, setProducts] = useState<Array<Product>>(productInitialValue)
  const [selectedProducts, setSelectedProducts] = useState<Array<Product>>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)

  return (
    <div>
      <h2>Product List</h2>
      <p>Selected Products: {}</p>
      <button>add</button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 1 }}>
        {products.map((item, index) => {
          return <ProductItem key={index} product={item} />
        })}
      </Box>
    </div>
  )
}

export default Products
