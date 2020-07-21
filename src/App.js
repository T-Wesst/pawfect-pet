import React from 'react';
import myData from './data.json';
import Cards from './components/Cards';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// const token = process.env.REACT_APP_TOKEN;

export default function App() {
  // const [data, setData] = useState({ hits: [] });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/animals?type=dog', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setData(result.data);
  //   };
  //   fetchData();
  // });
  return (
    <div>
      <Cards data={myData} />
    </div>
  );
}
