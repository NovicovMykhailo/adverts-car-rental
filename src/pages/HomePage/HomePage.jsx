import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Link to={'/catalog'} >Home Page</Link>
    </>
  );
}
