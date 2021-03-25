/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

import Header from "./copmponents/Header";
import Menu from "./copmponents/Menu";
// import Main from './copmponents/Main'
import style from "./App.module.css";
import PostLisComponent from "./copmponents/Main/PostListComponent";
import About from "./copmponents/About";
import ContactUs from "./copmponents/ContactUs";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <PostLisComponent />
          </Route>
          <Route path="/about/:name" component={About} />
          <Route path="/contact-us" component={ContactUs} />
          <Route
            path="/contact-email"
            render={(props) => 
              <h1 className={style.mainH}>Custom contact us email</h1>
            }/>
            {/* <Route
            path="/contact"
            render={(props) =>  <About/>}
          /> */}
            <Route
            render={(props) => <h1 >404 Page</h1>}
          />
          
        </Switch>

      </div>
    </div>
  );
}

export default App;
