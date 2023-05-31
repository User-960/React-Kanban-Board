import React from 'react';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardDetail from './components/Board/CardDetail/CardDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Board />
  },
  {
    path: '/tasks/:id',
    element: <CardDetail />
  },
]);

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </Layout>
  )
};

export default App;
