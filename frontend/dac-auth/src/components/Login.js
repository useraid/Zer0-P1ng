import { useRef, useState } from 'react';

import Button from './Button';
import Card from './Card';
import styles from './Login.module.css';

const Login = (props) => {

    const nameRef = useRef();
    const dacRef = useRef();
    const [nameError, setNameError] = useState('');
    const [dacError, setDacError] = useState('');

    
    const signupHandler = () => {
        console.log('Going to Sign Up Page');
        props.onNavigateSignup();
    }
    
    const loginHandler = (e) => {
        e.preventDefault();
        console.log('Logging in');

        setDacError("");
        setNameError("");

        const nameData = nameRef.current.value;
        const dacData = dacRef.current.value;


        if (nameData.trim().length === 0) {
            setNameError("Please enter your name.");
        }
        if (dacData.trim().length === 0) {
            setDacError("Please enter a valid DAC.");
        }
        if (nameData.trim().length === 0|| dacData.trim().length === 0){
            return;
        }
        const user = {
            name: nameData,
            DAC: dacData
        }
        console.log(user);
            
    }


    return (<Card>
        <form onSubmit={loginHandler}>
            <h2>Login</h2>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <label htmlFor='name'> Name: </label>
                    <input type="text" ref={nameRef} />
                    {nameError.length !== 0 && <p className={styles['error-text']}> {nameError}</p>}
                </div>
                <div className={styles.field}>
                    <label htmlFor='dac'> Enter DAC:  </label>
                    <input type="text" ref={dacRef} />
                    {dacError.length !== 0 && <p className={styles['error-text']}> {nameError}</p>}
                </div>
            </div>
            <div className={styles.actions}>
                <Button> Login </Button>
                <div>
                    <h3> Haven't signed up for a DAC? Sign up now:</h3>
                    <Button onClick={signupHandler} type = "button"> SignUp</Button>
                </div>
            </div>
        </form>
    </Card>);
}

export default Login;