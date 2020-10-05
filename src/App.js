import React from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder';
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
