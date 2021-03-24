/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './NavidationItem.module.css'


const NavigationItem = (props)=>{
    return (
        <li className={style.listItem}>
            <span className={style.navListItem}>{props.children}</span>
        </li>
    )
}
export default NavigationItem;