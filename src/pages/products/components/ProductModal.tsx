import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import SaveIcon from '@mui/icons-material/Save'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 1,
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
}

interface IModalProps {
  openModal: boolean
  handleClose: any
}

const colors: Array<string> = ['blue', 'red', 'black', 'yellow']

const ProductModal = (props: IModalProps) => {
  const { openModal, handleClose } = props

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              New Product
            </Typography>
            <Box
              component='form'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 2,
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='title-basic'
                label='Title'
                variant='outlined'
                size='small'
                fullWidth
              />
              <TextField
                id='price-basic'
                label='price'
                variant='outlined'
                size='small'
                type='number'
                fullWidth
              />
              <TextField
                id='colors'
                select
                label='Select Colors'
                size='small'
                defaultValue='blue'
                helperText='Please select your color'
                fullWidth
              >
                {colors.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Stack direction='row' spacing={2}>
              <Button variant='contained' startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button variant='outlined'>Cancel</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ProductModal
