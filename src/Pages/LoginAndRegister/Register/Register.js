import React, { useState } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const { registerUser, isLoading } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const onHandleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        // console.log(newRegisterData);
        setRegisterData(newRegisterData);
    }

    const onRegisterFormSubmit = (e) => {
        if (registerData.password != registerData.passwordRetype) {
            alert('Sorry, Both password did not match.');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.displayName, history);
        alert("Form Submitted.");

        e.preventDefault();
    }

    return (
        <>
            <h2>REGISTER</h2>
            <div style={{ width: '33rem' }}>

                <form onSubmit={onRegisterFormSubmit}>
                    <MDBInput onChange={onHandleChange} name='displayName' label='Name' id='typeName' type='text' />
                    <br />
                    <MDBInput label='Email' onChange={onHandleChange} name='email' id='typeEmail' type='email' />
                    <br />
                    <MDBInput label='Password' name='password' onChange={onHandleChange} id='typePassword' type='password' />
                    <br />
                    <MDBInput onChange={onHandleChange} label='Retype Password' name='passwordRetype' id='typePassword2' type='password' />
                    <br />
                    <MDBBtn type='submit' style={{ backgroundColor: '#55acee' }}><MDBIcon className='me-2' far icon="registered" />REGISTER
                    </MDBBtn>
                    <MDBBtn href='/login' style={{ backgroundColor: '#55acee' }}><MDBIcon className='me-2' far icon="registered" /> REGISTERED? LOGIN
                    </MDBBtn>
                </form>

            </div>
        </>
    );
};

export default Register;