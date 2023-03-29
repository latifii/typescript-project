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
import { Box, Stack } from '@mui/material'

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
        <Typography>Title: {product.title}</Typography>
        <Typography color='text.secondary'>Price: {product.price}</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          Colors:{' '}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {product.colors.map((item, index) => {
              return (
                <span
                  key={index}
                  style={{
                    background: item,
                    width: '25px',
                    height: '25px',
                    border: 1,
                    borderColor: 'grey.300',
                    borderRadius: 99,
                  }}
                ></span>
              )
            })}
          </Box>
        </Box>
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
