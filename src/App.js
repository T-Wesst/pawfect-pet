import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import axios from 'axios';
const token = process.env.REACT_APP_TOKEN;

export default function App() {
  const [data, setData] = useState({ animals: [] });
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
    <div>
      <Cards {...data} />
    </div>
  );
}
