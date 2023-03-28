import React from 'react'
import { Product } from '../../../models/Product'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import EditIcon from '@mui/icons-material/Edit'
import { Stack } from '@mui/material'

interface IProductProps {
  product: Product
  selectedItem: any
  selected: any
  removeItem: any
}
const ProductItem = (props: IProductProps) => {
  const { product, selectedItem, selected, removeItem } = props

  return (
    <Card
      sx={{
        minWidth: 275,
        gap: 2,
        boxShadow: 0,
        border: 1,
        borderColor: 'grey.300',
      }}
    >
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
        <Stack direction='row' alignItems='center' spacing={1}>
          {selected ? (
            <IconButton
              size='small'
              color='primary'
              onClick={() => removeItem(product)}
            >
              <RemoveIcon fontSize='small' />
            </IconButton>
          ) : (
            <IconButton
              size='small'
              color='primary'
              onClick={() => selectedItem(product)}
            >
              <AddIcon fontSize='small' />
            </IconButton>
          )}

          <IconButton size='small' color='secondary'>
            <EditIcon fontSize='small' />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default ProductItem
