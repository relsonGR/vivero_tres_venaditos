import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
    
export default function Card_img({open,cancelView, imageUrl, nombrePlanta, descripcionPlanta}) {
  //const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/*<Button onClick={handleOpen}>Open modal</Button>*/}
      <Modal
        open={open}
        onClose={cancelView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={imageUrl} alt="Imagen en grande" style={{ width: '100%', height: '100%' }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {nombrePlanta}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {descripcionPlanta}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
