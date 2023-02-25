import { Fragment, useState } from "react";
import Header from './components/Header';
import Login from "./components/Login";
import Signup from "./components/Signup";

import styles from './index.module.css'
import bgimage from './assets/skyline.jpg'

const App = () => {

  const [isOnSignup, setIsOnSignUp] = useState(true);

  const navigateSignupHandler = () => {
    setIsOnSignUp(true);
  }

  const navigateLoginHandler = () => {
    setIsOnSignUp(false);
  }


  return (<Fragment>
    <Header />
    <div className={styles.content} >
      <div>
        <img src={bgimage} alt="Not available" />
      </div>
      {!isOnSignup && <Login onNavigateSignup={navigateSignupHandler} />}
      {isOnSignup && <Signup onNavigateLogin={navigateLoginHandler} />}
    </div>

  </Fragment>);
}

export default App;