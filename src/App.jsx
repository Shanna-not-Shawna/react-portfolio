import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main className="contentContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;