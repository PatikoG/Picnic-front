import axios from 'axios'
import './App.css';
import styled from 'styled-components'
import { Gender } from './Component/segmenttypes/Gender';
import { Mobile } from './Component/segmenttypes/Mobile';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import { University } from './Component/segmenttypes/University';
import { Web } from './Component/segmenttypes/Web';
import { Custom } from './Component/segmenttypes/Custom';






function App() {
  const [data, setData] = useState([]);
  



  useEffect(() => {
    axios.get('https://picnic-back-production.up.railway.app/').then((response) => {
      setData(response.data);
    });
  }, []);



  console.table(data)
  return (
    <Routes>
      <Route path='/' element={<Home data={data} />}/>
      <Route path='/gender' element={<Gender data={data}/>}/>
      <Route path='/mobile' element={<Mobile data={data}/>}/>
      <Route path='/university' element={<University data={data}/>}/>
      <Route path='/web' element={<Web data={data}/>}/>
      <Route path='/custom' element={<Custom data={data}/>}/>
    </Routes>
  )
}

export default App;



