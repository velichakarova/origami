/* eslint-disable jsx-a11y/anchor-is-valid */
import style  from './MenuItem.module.css';

const MenuItem =({
    children
})=>{
    return(
        <li className={style.menuItem}>
            <a href="#" className={style.asideLink}>{children}</a>
        </li>
    )
}

export default MenuItem;