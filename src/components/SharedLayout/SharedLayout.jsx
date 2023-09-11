import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <section className={css.section}>
      <aside className={css.sideBar}>
        <nav className={css.navBar}>
          <Link to={'/'} className="button-primary">
            Home
          </Link>
          <Link to={'/catalog'} className="button-primary">
            Catalog
          </Link>
          <Link to={'/favorites'} className="button-primary">
            Favorites
          </Link>
        </nav>
      </aside>

      <main className={css.main}>
        <Suspense fallback={<div>Loading......</div>}>
          <Outlet />
        </Suspense>
      </main>
    </section>
  );
};

export default SharedLayout;
