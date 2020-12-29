import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import Modal from '../Modal';

const Home = ({ setUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      bgcolor="primary.main"
      height="100vh"
      color="white"
      flexWrap="wrap"
      textAlign="center"
    >
      <Box width="100%" paddingY={{ xs: 3, md: 8 }}>
        <Typography component="h2" variant="h3">
          The Exploding Kitten
        </Typography>
      </Box>
      <Box width="100%" mt="14vh">
        <Typography component="h2" variant="h4" paragraph>
          Hey, Welcome
        </Typography>
        <br />
        <br />
        <Typography component="h3" variant="h6" gutterBottom>
          Click here to start
        </Typography>
        <Button variant="contained" size="large" onClick={() => setOpen(true)}>
          Let's Start
        </Button>{' '}
      </Box>

      <Modal open={open} handleClose={() => setOpen(false)} setUser={setUser} />
    </Box>
  );
};

export default Home;
