import { Fragment, useState } from "react";
import Header from './components/Header';
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {

  const [isOnSignup, setIsOnSignUp] = useState(false);

  const navigateSignupHandler = () => {
    setIsOnSignUp(true);
  }
  
  const navigateLoginHandler = () => {
    setIsOnSignUp(false);
  }
  
  return ( <Fragment>
    <Header />
    {!isOnSignup && <Login onNavigateSignup = {navigateSignupHandler} />}
    {isOnSignup && <Signup onNavigateLogin = {navigateLoginHandler} />}

  </Fragment> );
}
 
export default App;