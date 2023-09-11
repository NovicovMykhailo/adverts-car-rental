import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import menuIcon from '../../assets/chevron-down.svg';
import NavMenu from './NavMenu';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <section className={css.section}>
      <NavMenu isActive={isMenuOpen} />
      <div onClick={() => setIsMenuOpen(prev => !prev)}>
        <img src={menuIcon} alt="Menu Icon" className={`${css.openMenuBtn} ${!isMenuOpen && css.clzdMenu}`} />
      </div>

      <main className={css.main}>
        <Outlet />
      </main>
    </section>
  );
};

export default SharedLayout;
