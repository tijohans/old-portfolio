import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
