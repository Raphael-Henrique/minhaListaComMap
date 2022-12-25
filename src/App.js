import React from 'react';
import '../src/index.css';
//import { BsEyeFill, BsFillXCircleFill } from "react-icons/bs";
import './Components/Tables';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillFileExcel } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import Tables from './Components/Tables';





export default function App() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="header">

                <h2>Lista</h2>
                <Button style={{ color: "gray", marginRight: 1095 }} variant="outline-light">Ativos
                    <AiFillCaretDown /> </Button>

                <div class="buttons">
                    <AiFillFileExcel style={{ color:"#087619" }} />
                    <BsFillFileEarmarkBreakFill style={{ color: "#A3C9E0" }} />
                    < BsPlusLg style={{ color: "#A3C9E0" }} variant="primary" onClick={handleShow} />
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Novo Comunicado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Título:"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control styles={{ padding: 100 }} as="textarea" placeholder="Descrição:" rows={10} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Questionário:"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <GrSend variant="primary" onClick={handleClose} />
                </Modal.Footer>
            </Modal>

            <Tables />
        </>
    )
}
