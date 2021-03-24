/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link, NavLink} from 'react-router-dom'
import style from './Header.module.css'
import NavidationItem from './NavigationItem'

const Header=()=>{
    return(
        <nav className={style.navigation}>
        <ul>
          <li className={style.listItem}><img src="/white-origami-bird.png" alt="Logo"/></li>
          <Link to="/"><NavidationItem>Home</NavidationItem></Link>
          <Link to="/about"><NavidationItem>About</NavidationItem></Link>
          <Link to="/contact-us"><NavidationItem>Contact Us</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 4</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 5</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 6</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 7</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 8</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 9</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 10</NavidationItem></Link>
          <Link to="/"> <NavidationItem>Going to 11</NavidationItem></Link>
        </ul>
      </nav>
    )
}

export default Header;