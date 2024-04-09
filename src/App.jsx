import React,{useState,useEffect} from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainLayout from './layout/MainLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route path="/" element={<Homepage />} />
      </Route>
    )
    )
  
  return <RouterProvider router={router} />;

}
export default App
