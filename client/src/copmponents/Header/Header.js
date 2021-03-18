/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Header.module.css'
import NavidationItem from './NavigationItem'

const Header=()=>{
    return(
        <nav className={style.navigation}>
        <ul>
          <li className={style.listItem}><img src="/white-origami-bird.png" alt="Logo"/></li>
          <NavidationItem>Going to 1</NavidationItem>
          <NavidationItem>Going to 2</NavidationItem>
          <NavidationItem>Going to 3</NavidationItem>
          <NavidationItem>Going to 4</NavidationItem>
          <NavidationItem>Going to 5</NavidationItem>
          <NavidationItem>Going to 6</NavidationItem>
          <NavidationItem>Going to 7</NavidationItem>
          <NavidationItem>Going to 8</NavidationItem>
          <NavidationItem>Going to 9</NavidationItem>
          <NavidationItem>Going to 10</NavidationItem>
          <NavidationItem>Going to 11</NavidationItem>
        </ul>
      </nav>
    )
}

export default Header;