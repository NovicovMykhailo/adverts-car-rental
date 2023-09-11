// import {lazy, useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';

const CatalogPage = lazy(()=> import('../pages/CatalogPage/CatalogPage'))
const FavoritesPage = lazy(()=> import('../pages/FavoritesPage/FavoritesPage'))



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
