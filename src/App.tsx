import React from 'react';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Board />
      </main>
      <Footer />
    </Layout>
  )
};

export default App;
