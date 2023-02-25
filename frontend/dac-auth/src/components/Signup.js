import styles from './Signup.module.css';

const Signup = (props) => {

    const loginHandler = () => {
        console.log('Going to login page');
        props.onNavigateLogin();
    }

    const locateHandler = () => {
        console.log('Working');
    }
    return (<div className={styles.form}>
        <form>
            <h2> Signup </h2>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <label htmlFor='name'> Name: </label>
                    <input type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor='City'> City:  </label>
                    <input type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor='Locality'> Locality:  </label>
                    <input type="text" />
                </div>
                <div className={styles.field}>
                    <label htmlFor='Building'> Building:  </label>
                    <input type="text" />
                </div>
            </div>
            <div className={styles.actions}>
                <div>
                    <h3> Please allow geolocation access:</h3>
                    <button onClick={locateHandler}>Generate DAC</button>
                </div>
                <button> Signup </button>
                <div>
                    <h3> Go back to login page</h3>
                    <button onClick={loginHandler}> Login</button>
                </div>
            </div>
        </form>
    </div>);
}

export default Signup;