import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Army from '../components/Army';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />} />
      <Route path='/home' element={<Home {...props} />} />
      <Route path='/army' element={<Army />} />
    </Routes>
  )
}