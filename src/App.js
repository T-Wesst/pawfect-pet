import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Cards from './components/Cards';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/NavBar';
import myData from './data.json';
import axios from 'axios';
const token = process.env.REACT_APP_TOKEN;
// const api_key = process.env.REACT_APP_API_KEY;
// const secret = process.env.REACT_APP_SECRET;

// const genToken = async () => {
//   const { data } = await axios.post('oauth2/token', {
//     params: {
//       grant_type: 'client_credentials',
//       client_secret: secret,
//       client_id: api_key,
//     },
//   });
//   return data;
// };

export default function App() {
  const [data, setData] = useState({ animals: [] });
  // const [token, setToken] = useState(genToken);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('animals?type=dog', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment style={{ backgroundColor: 'E9EBEE' }}>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            backgroundColor: '#fff',
            height: '100vh',
            border: 'solid #F2F2F2 2px',
            boxShadow: '0px 0px 12px #888888',
            padding: '32px',
          }}
        >
          <Cards {...myData} />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
