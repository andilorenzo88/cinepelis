import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FavoritesContainer from './components/containers/FavoritesContainer';
import Footer from './components/containers/Footer';
import Header from './components/containers/Header';
import MovieDetailContainer from './components/containers/MovieDetailContainer';
import MoviesContainer from './components/containers/MoviesContainer';
import { FavoriteContextProvider } from './components/context/FavoritesContext';

function App() {
  return (
    <FavoriteContextProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<MoviesContainer/>}/>
              <Route path='/movie/:id' element={<MovieDetailContainer/>}/>
              <Route path='/favorites' element={<FavoritesContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </FavoriteContextProvider>
  );
}

export default App;
