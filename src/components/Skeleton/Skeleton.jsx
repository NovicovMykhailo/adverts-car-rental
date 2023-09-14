import css from './Skeleton.module.css';

export default function Skeleton() {
  return (
    <ul className={css.container} >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
