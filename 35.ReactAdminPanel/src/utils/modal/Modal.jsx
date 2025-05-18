
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Form } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ open, handleClose, handleSubmit, handleChange, formData, isEdit }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {isEdit ? "Edit Product" : "Create Product"}
            </Typography>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" placeholder="Image URL" onChange={handleChange} name="image" value={formData.image} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={handleChange} name="title" value={formData.title} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" onChange={handleChange} name="category" value={formData.category} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" onChange={handleChange} name="price" value={formData.price} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Description" onChange={handleChange} name="description" value={formData.description} required />
              </Form.Group>
              <Button type="submit" variant="primary">{isEdit ? "Update" : "Add"}</Button>
            </Form>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
