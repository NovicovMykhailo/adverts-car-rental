
import { lazy} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default App;
