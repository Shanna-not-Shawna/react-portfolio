import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <main ClassName="mx-3">
        <Outlet />
      </main>
    </>  
  );
}

export default App;
