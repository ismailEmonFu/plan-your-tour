import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '\home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <h1>Please Login</h1>
            <MDBBtn onClick={handleGoogleLogIn} style={{ backgroundColor: '#55acee' }} href='#'>
                <MDBIcon className='me-2' fab icon='google' /> Google Sign In
            </MDBBtn>
        </div>
    );
};

export default Login;