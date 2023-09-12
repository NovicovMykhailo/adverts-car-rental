import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import NavMenu from './NavMenu';
import MenuIcon from './MenuIcon';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={css.section}>
      <NavMenu isActive={isMenuOpen} />
      <MenuIcon isActive={isMenuOpen} onClick={setIsMenuOpen} />
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </section>
  );
};

export default SharedLayout;
