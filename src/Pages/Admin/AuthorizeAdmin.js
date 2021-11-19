import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AuthorizeAdmin = () => {
    // const { register, handleSubmit, reset } = useForm();

    const history = useHistory();
    const [name, setName] = useState(" ");
    const [password, setPassword] = useState(0);


    const handleNameChange = (e) => {
        setName(e.target.value);
        // console.log(name);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // console.log(password);
    }

    const handleSubmit = (e) => {
        if (name === 'simpleUser' && password === '878388') {
            // console.log("ok");
            history.push('/admin');
        } else {
            alert("Something went wrong!!");

        }
    }

    return (
        <div id='authorizeAdmin' className="d-grid gap-5 w-25 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Enter User Name</label>
                    <input type="name"
                        className="form-control"
                        id="name"

                        aria-describedby="nameHelp"
                        placeholder="simpleUser"
                        onChange={handleNameChange}
                    />
                    <small className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"

                        placeholder="878388"
                        onChange={handlePasswordChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                // onClick={handleSubmit}
                >
                    Login to Dashboard
                </button>
            </form>
            <Nav.Link as={HashLink} to="/adminPanel#adminPanel"><MDBBtn color='info'>
                Return to ADMIN Panel
            </MDBBtn></Nav.Link>
        </div>
    );
};

export default AuthorizeAdmin;