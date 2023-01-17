import React from "react";
import { useState } from "react";
import { Button,Modal } from "react-bootstrap";
import { InputGroup,Form } from "react-bootstrap";
import "../App.css";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add({addHandler}) {
    //modal manipulation
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //user states
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [date,setDate]=useState('');
    const [type,setType]=useState('');
    const [image,setImage]=useState('');
    const [rating,setRating]=useState(0);
    //add new movie
    const addMovie=()=>{
        addHandler({
            id:uuidv4(),
            name:name,
            description:description,
            date:date,
            type:type,
            image:image,
            rating:rating,
            isDone:false,
        })
        handleClose()
    }

    return (
        <div className="adds">
        <Button variant="primary" onClick={handleShow}>
            ADD NEW MOVIE
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <InputGroup>
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="the movie title" onChange={(e)=>setName(e.target.value)} value={name}/>
                <Form.Label>Movie Description</Form.Label>
                <Form.Control type="text" placeholder="the movie description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                <Form.Label>Movie image</Form.Label>
                <Form.Control type="text" placeholder="the movie image" onChange={(e)=>setImage(e.target.value)} value={image}/>
                <Form.Label>Movie Date</Form.Label>
                <Form.Control type="text" placeholder="the movie release date" onChange={(e)=>setDate(e.target.value)} value={date}/>
                <Form.Label>Movie Type</Form.Label>
                <Form.Control type="text" placeholder="the movie type" onChange={(e)=>setType(e.target.value)} value={type}/>
                <Form.Label>Movie Rate</Form.Label>
                <Form.Control type="text" placeholder="the movie Rate" onChange={(e)=>setRating(e.target.value)} value={rating}/>
            </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>CLOSE</Button>
                <Button variant="primary" onClick={addMovie}>SAVE CHANGES</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default Add;