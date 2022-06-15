import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';
// import { Table, Button, Form } from 'react-bootstrap';
import { Button, Modal, Form, Table, Row, Col, InputGroup } from "react-bootstrap";


const Dashboard = () => {

    const [userData, setUserData] = useState({
        list: []
    })
    useEffect(() => {
        console.log("useEffect")

        const { list } = userData;
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                console.log(response.data.data)
                // setUserData(response.list)
                setUserData({ ...userData, list: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    const deleteFn = (user) => {
        console.log(user)

        const filterUserData = userData.data.filter((each) => each.id !== user.id)
        console.log(filterUserData)
        alert("Delete from this table")
        setUserData
            ({ ...userData, data: filterUserData })
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="mt-5">
            <Button variant="success" onClick={handleShow} className="btn">Add Customers</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD DETAILS</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is required*
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is required*
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                {/* <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> */}
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your email"
                                    // aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email*
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Button type="submit">Submit form</Button>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>

                <Table bordered striped hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Profile pic</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.list.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td><img src={user.avatar} alt="avatar" /></td>
                                        <td>{user.email}</td>
                                        {/* <td>
                                        <Button variant="primary">edit</Button> {''}
                                        <Button variant="success" onClick={() => deleteUser(user)}>Delete</Button>
                                    </td> */}
                                        <td>
                                            <Button variant="success">Edit</Button>{' '}
                                            <Button variant="danger" onClick={() => deleteFn(user)}>Delete</Button>{' '}
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>

            <div>


            </div>
        </div>
    )

}

export default Dashboard;


