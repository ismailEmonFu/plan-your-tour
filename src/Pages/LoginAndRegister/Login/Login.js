import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { MDBInput } from 'mdb-react-ui-kit';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { signInUsingGoogle, loginUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '\home';

    const onHandleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = (e) => {
        alert('submitted');
        loginUser(loginData.email, loginData.password, location, history);
        // console.log('clicked');

        e.preventDefault();
    }

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <>
            <h1>Please Login</h1>
            <div style={{ width: '33rem' }}>

                <form onSubmit={handleLoginSubmit}>
                    <br />
                    <MDBInput label='Email' onChange={onHandleChange} name='email' id='email' type='email' />
                    <br />
                    <MDBInput label='Password' name='password' onChange={onHandleChange} id='typePassword' type='password' />
                    <br />
                    <MDBBtn type='submit' style={{ backgroundColor: '#55acee' }}>LOGIN</MDBBtn>
                </form>

            </div>

            <MDBBtn style={{ backgroundColor: '#55acee' }} href='/register'>
                <MDBIcon className='me-2' /> NEW? REGISTER
            </MDBBtn>
            <MDBBtn onClick={handleGoogleLogIn} style={{ backgroundColor: '#55acee' }} href='#'>
                <MDBIcon className='me-2' fab icon='google' /> Google Sign In
            </MDBBtn>
        </>
    );
};

export default Login;