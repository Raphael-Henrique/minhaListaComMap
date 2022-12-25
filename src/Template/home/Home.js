import React from 'react';
import '../../index.css';
import { BsEyeFill, BsFillXCircleFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillFileExcel } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { GrSend } from "react-icons/gr";





export default function Home() {


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
                    <BsPlusLg style={{ color: "#A3C9E0" }} variant="primary" onClick={handleShow} />
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
                    <GrSend style={{ color: "green" }} variant="primary" onClick={handleClose} />
                </Modal.Footer>
            </Modal>
            <Table>
                <thead>
                    <tr>
                        <th class="color">
                            Título
                            <AiFillCaretDown />
                        </th>
                        <th>
                            Lojas
                            <AiFillCaretDown />
                        </th>
                        <th>Usuários</th>
                        <th>
                            Data
                            <AiFillCaretDown />
                        </th>
                        <th>
                            Termos e cond.
                            <AiFillCaretDown />
                        </th>
                        <th>Enviados</th>
                        <th>Pendentes</th>
                        <th>Recebidos sem leitura</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Comunicado teste 2</td>
                        <td>-</td>
                        <td>Gustavo Pontes</td>
                        <td>07/12/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado Teste</td>
                        <td>-</td>
                        <td>Gustavo Pontes</td>
                        <td>07/12/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tahiti Tatiyuwa</td>
                        <td>21/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tathiana Imuta</td>
                        <td>08/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Nortificação</td>
                        <td>A miniatura</td>
                        <td>Miniatura Lojisrta</td>
                        <td>06/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Nortificação</td>
                        <td>A/Z CALZATURE</td>
                        <td>Lojista teste</td>
                        <td>06/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado</td>
                        <td>A Miniatura</td>
                        <td>Miniatura Lojisrta</td>
                        <td>05/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado</td>
                        <td>A/Z CALZATURE</td>
                        <td>Lojista Teste</td>
                        <td>05/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado</td>
                        <td>#Madness</td>
                        <td>Maltec</td>
                        <td>05/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tathiana Imuta</td>
                        <td>02/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tathiana Imuta</td>
                        <td>02/09/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tathiana Imuta</td>
                        <td>25/08/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A miniatura</td>
                        <td>Tathiana Imuta</td>
                        <td>25/08/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado</td>
                        <td>A/Z CALZATURE</td>
                        <td>Lojista Teste</td>
                        <td>25/08/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Comunicado</td>
                        <td>A miniatura</td>
                        <td>Miniatura Lojisrta</td>
                        <td>22/08/202</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>job reaberto</td>
                        <td>A miniatura</td>
                        <td>Gustavo Pontes</td>
                        <td>09/08/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job reaberto</td>
                        <td>A/Z CALZATURE</td>
                        <td>Eduardo Ashikawa</td>
                        <td>02/08/2022</td>
                        <td>Não</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <BsEyeFill style={{
                                color: "#929CF0"
                            }} />
                            <BsFillXCircleFill style={{
                                color: "red",
                                marginLeft: '20%'
                            }} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
