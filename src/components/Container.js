import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            backgroundColor: '#fff',
            height: '100vh',
            border: 'solid #F2F2F2 2px',
            boxShadow: '0px 0px 12px #888888',
          }}
        />
      </Container>
    </React.Fragment>
  );
}
