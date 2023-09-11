import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';
import useMountTransition from 'hooks/useMountTransition';

export default function NavMenu({isActive}) {
    const isMounted = useMountTransition(isActive, 100)


    const asideStyles = {
        left: isMounted ? '0' : '-100%',
        opacity: isMounted ? 1 : 0,
      };

  return (
    <aside style={asideStyles} className={css.sideBar} >
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
  );
}
