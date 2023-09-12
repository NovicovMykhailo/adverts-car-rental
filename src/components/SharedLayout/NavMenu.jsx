import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';
import useMountTransition from 'hooks/useMountTransition';
import { useEffect, useRef } from 'react';

export default function NavMenu({ isActive, setClose }) {
  const isMounted = useMountTransition(isActive, 10);

  const menuRef = useRef();

  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target) && e.target.nodeName !== 'IMG') setClose(false);
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [setClose]);

  const asideStyles = {
    left: isMounted ? '0' : '-100%',
    opacity: isMounted ? 1 : 0,
  };

  return (
    <aside
      style={asideStyles}
      className={css.sideBar}
      id="sideBar"
      ref={menuRef}
    >
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
