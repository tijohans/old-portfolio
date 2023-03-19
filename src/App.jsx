import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Project from './pages/Project/Project'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
    <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />

        {/* Project Routes */}
        <Route path='/projects'>
          <Route index element={<Projects />} />
          <Route path=':id' element={<Project />} />
        </Route>

        {/* Route for pages that do not exist */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
