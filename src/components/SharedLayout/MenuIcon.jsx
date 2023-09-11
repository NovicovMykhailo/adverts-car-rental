import css from "./SharedLayout.module.css"
import menuIcon from '../../assets/chevron-down.svg';
export default function MenuIcon({onClick, isActive}){
    return(
        <div onClick={() => onClick(prev => !prev)}>
        <img src={menuIcon} alt="Menu Icon" className={`${css.openMenuBtn} ${!isActive && css.clzdMenu}`} />
      </div>
    )
}