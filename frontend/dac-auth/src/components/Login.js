import styles from './Login.module.css';

const Login = (props) => {
    
    const signupHandler = () => 
    {
        console.log('Going to Sign Up Page');
        props.onNavigateSignup();
    }

    return (<div className={styles.form}>
        <form>
            <h2>Login</h2>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <label htmlFor='name'> Name: </label>
                    <input type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor='dac'> Enter DAC:  </label>
                    <input type="text" />
                </div>
            </div>
            <div className={styles.actions}>
                <button> Login </button>
                <div>
                    <h3> Haven't signed up for a DAC? Sign up now:</h3>
                    <button onClick={signupHandler}> SignUp</button>
                </div>
            </div>
        </form>
    </div>);
}

export default Login;