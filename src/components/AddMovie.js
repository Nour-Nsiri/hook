
import React, { useState } from "react";
// bootstratp components
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
    // state initialisation
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        id: Math.random(),
        name: "",
        img: "",
        duration: "",
        date: "",
        rating: "",
    });
    const { name, img, duration, date, rating } = newMovie;
    // set states
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) =>
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    const handleSubmit = () => {
        add(newMovie);
        setNewMovie({
            id: Math.random(),
            name: "",
            img: "",
            duration: "",
            date: "",
            rating: "",
        });
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                ADD NEW MOVIE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>add your favorite movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>NAME :</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                        <label>IMAGE :</label>
                        <input type="text" name="img" onChange={handleChange} />
                        <label>DURATION :</label>
                        <input
                            type="text"
                            name="duration"
                            onChange={handleChange}
                        />
                        <label>Date :</label>
                        <input
                            type="text"
                            name="date"
                            onChange={handleChange}
                        />
                        <label>RATING :</label>
                        <input
                            type="text"
                            name="rating"
                            onChange={handleChange}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        // 3 call the function
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddMovie;