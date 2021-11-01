import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const AddLocation = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        console.log(data);

        axios.post('http://localhost:5000/location', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="d-grid gap-5 w-50 mx-auto" id='newLocation'>
            <p className="text-decoration-line-through mt-5 fw-bolder fs-2 text-success">Please Add Your New Location Information</p>
            <form onSubmit={handleSubmit(onSubmit)} className="d-grid gap-5 w-75 mx-auto">
                <input {...register("location", { required: true })} placeholder="Location Title" />
                <textarea {...register("description")} placeholder="Description Of Your Location" />
                <input {...register("img")} placeholder="Put Image URL" />
                <input type="number" {...register("key")} placeholder="Give a key" />
                <input type="submit" />
            </form>
            <Nav.Link as={HashLink} to="/admin#admin"><MDBBtn color='info'>
                Return to ADMIN
            </MDBBtn></Nav.Link>
        </div>
    );
};

export default AddLocation;