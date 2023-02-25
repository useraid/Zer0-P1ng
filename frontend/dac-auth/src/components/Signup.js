import { useRef, useState } from 'react';

import Button from './Button';
import Card from './Card';
import styles from './Signup.module.css';

const Signup = (props) => {

    const nameRef = useRef();
    const cityRef = useRef();
    const buildingRef = useRef();
    const localityRef = useRef();

    const [nameError, setNameError] = useState('');
    const [cityError, setCityError] = useState('');
    const [buildingError, setBuildingError] = useState('');
    const [localityError, setLocalityError] = useState('');

    const loginHandler = () => {
        console.log('Going to login page');
        props.onNavigateLogin();
    }

    const locateHandler = (e) => {
        e.preventDefault();
        console.log('Generating Digital Address Code:');

        setBuildingError("");
        setCityError("");
        setLocalityError("");
        setNameError("");

        const nameData = nameRef.current.value;
        const cityData = cityRef.current.value;
        const localityData = localityRef.current.value;
        const buildingData = buildingRef.current.value;

        if (nameData.trim().length === 0) {
            setNameError("Please enter your name.");
        }
        if (cityData.trim().length === 0) {
            setCityError("Please enter a valid city.");
        }
        if (localityData.trim().length === 0) {
            setLocalityError("Please enter a valid locality.");
        }
        if (buildingData.trim().length === 0) {
            setBuildingError("Please enter a valid building.");
        }
        if (nameData === "" || buildingData === "" || cityData === "" || localityData === "") {
            return;
        }
        const user = {
            name: nameData,
            add1: cityData,
            add2: localityData,
            add3: buildingData,
        }
        console.log(user);

        let coordinates = {};

        navigator.geolocation.getCurrentPosition(position => {
            coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            const setLocation = async () => {
                try {
                    const response = await fetch('https://dummy-api-c9a0e-default-rtdb.firebaseio.com/location.json', {
                        method: 'POST',
                        body: JSON.stringify({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            ...user
                        }),
                        headers:
                        {
                            'Content-Type': 'applications/json'
                        }
                    })
                    if (!response.ok) {
                        throw new Error('Could not post');
                    }
                    console.log('Fetched');
                } catch(err)
                {
                    console.log(err.message);
                }
            }
                    setLocation();
                
        })
    }

    return (<Card>
        <form onSubmit={locateHandler}>
            <h2> Signup </h2>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <label htmlFor='name'> Name: </label>
                    <input type="text" ref={nameRef} />
                    {nameError.length !== 0 && <p className={styles['error-text']}> {nameError}</p>}
                </div>
                <div className={styles.field}>
                    <label htmlFor='City'> City:  </label>
                    <input type="text" ref={cityRef} />
                    {cityError.length !== 0 && <p className={styles['error-text']}> {cityError}</p>}
                </div>
                <div className={styles.field}>
                    <label htmlFor='Locality'> Locality:  </label>
                    <input type="text" ref={localityRef} />
                    {localityError.length !== 0 && <p className={styles['error-text']}> {localityError}</p>}
                </div>
                <div className={styles.field}>
                    <label htmlFor='Building'> Building:  </label>
                    <input type="text" ref={buildingRef} />
                    {buildingError.length !== 0 && <p className={styles['error-text']}> {buildingError}</p>}
                </div>
            </div>
            <div className={styles.actions}>
                <div>
                    <h3> Please allow geolocation access:</h3>
                    <Button type="submit">Generate DAC</Button>
                </div>
                <div>
                    <h3> Already signed up? Log in now. </h3>
                    <Button type="button" onClick={loginHandler}> Login</Button>
                </div>
            </div>
        </form>
    </Card>);
}

export default Signup;