import { Suspense,  useState } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import NavMenu from './NavMenu';
import MenuIcon from './MenuIcon';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  return (
    <section className={css.section}>
      <h1 className="visually-hidden">Rent your pearfect car</h1>
      <NavMenu isActive={isMenuOpen} setClose={setIsMenuOpen}/>
      <MenuIcon isActive={isMenuOpen} onClick={setIsMenuOpen} />
      <div className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default SharedLayout;
