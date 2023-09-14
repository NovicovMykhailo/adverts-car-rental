import logo from '../../assets/logo.svg';
import css from './HomePage.module.css'
export default function Logo() {
  return (
    <div style={{display: "flex", flexDirection: "colum",alignItems: "center", justifyContent:"space-between", width: "111px"}} className={css.logo}>
      <img src={logo} alt="Logo" width="50" height="50"/>
      <p style={{fontWeight: "600",}}>Phenix Rentals</p>
    </div>
  );
}
