import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts';
import PostDetails from '../components/PostDetails';
import Dashboard from '../components/Dashboard';
import ContactUs from '../components/ContactUs';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />} />
      <Route path='/home' element={<Home {...props} />} />
      <Route path='/posts' element={<Posts {...props} />} />
      <Route path='/posts/:id/' element={<PostDetails {...props} />} />
      <Route path='/dashboard/' element={<Dashboard {...props} />} />
      <Route path='/contact-us' element={<ContactUs {...props} />} />
    </Routes>
  )
}