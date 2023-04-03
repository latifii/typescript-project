import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { Product } from '../../models/Product'
import ProductItem from './components/ProductItem'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ProductModal from './components/ProductModal'
// import { v4 } from 'uuid'
import { v4 as uuidv4 } from 'uuid'
const productInitialValue: Array<Product> = [
  {
    id: 1,
    title: 'Iran 207',
    price: '750',
    colors: ['red', 'black', 'green'],
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
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleAddProduct = (title: string, price: string) => {
    const uid = uuidv4()
    const newProduct: Product = {
      id: uid,
      title: title,
      price: price,
      colors: [],
      editMode: false,
    }
    setProducts([...products, newProduct])
  }

  const selectedItemHandler = (product: Product) => {
    setSelectedProducts([...selectedProducts, product])
    let tempTotal = parseInt(product.price)
    selectedProducts.forEach((item) => {
      tempTotal += parseInt(item.price)
    })
    setTotalPrice(tempTotal)
  }

  const removeItemHandler = (product: Product) => {
    const temp = selectedProducts.filter((item) => item.id != product.id)
    setSelectedProducts([...temp])
    let tempTotal = parseInt(product.price)
    setTotalPrice(totalPrice - tempTotal)
  }

  return (
    <div>
      <h2>Product List</h2>
      <p>
        Selected Products: {selectedProducts.length} Total Price :{totalPrice}
      </p>
      <Button
        variant='contained'
        sx={{ mb: 2 }}
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        New Product
      </Button>
      {open ? (
        <ProductModal
          openModal={open}
          handleClose={handleClose}
          addProduct={handleAddProduct}
        />
      ) : null}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 1,
          boxShadow: 3,
          p: 2,
          borderRadius: 2,
        }}
      >
        {products.map((item, index) => {
          return (
            <ProductItem
              key={index}
              product={item}
              selectedItem={selectedItemHandler}
              removeItem={removeItemHandler}
              selected={
                selectedProducts.findIndex((q) => q.id == item.id) != -1
              }
            />
          )
        })}
      </Box>
    </div>
  )
}

export default Products
