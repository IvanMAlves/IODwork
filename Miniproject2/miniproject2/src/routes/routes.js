import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Army from '../components/Army';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<About {...props} />} />
      <Route path='/about' element={<About {...props} />} />
      <Route path='/army' element={<Army />} />
    </Routes>
  )
}