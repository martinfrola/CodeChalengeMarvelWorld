import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Header from './components/generalComponents/Header';
import Footer from './components/generalComponents/Footer'
import './styles/App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;

