import React from 'react'
import { Product } from '../../../models/Product'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface IProductProps {
  product: Product
}
const ProductItem = (props: IProductProps) => {
  const { product } = props

  return (
    <Card sx={{ minWidth: 275, gap: 2 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Title: {product.title}
        </Typography>
        <Typography variant='h6' component='div' color='text.secondary'>
          Price: {product.price}
        </Typography>
        <Typography>
          Colors:{' '}
          {product.colors.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ProductItem
