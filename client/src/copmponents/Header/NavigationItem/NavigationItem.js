/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './NavidationItem.module.css'


const NavigationItem = (props)=>{
    return (
        <li className={style.listItem}>
            <a href="#" className={style.navListItem}>{props.children}</a>
        </li>
    )
}
export default NavigationItem;