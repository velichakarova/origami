/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from './copmponents/Header'
import Menu from './copmponents/Menu'
// import Main from './copmponents/Main'
import style from './App.module.css';
import PostLisComponent from './copmponents/Main/PostListComponent'

function App() {
  return (
    <div className={style.app}> 
        <Header/>
        <div className={style.container}>
          <Menu/>
          <PostLisComponent/>
        </div>
    </div>
  );
}

export default App;
