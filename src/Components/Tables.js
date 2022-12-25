import React from "react";
import '../index.css';
import { Table } from 'react-bootstrap';
import { BsEyeFill, BsFillXCircleFill } from "react-icons/bs";
import { AiFillCaretDown } from 'react-icons/ai'



const Tables = () => {


    // const lista = ["Comunicado teste 2", "-", "Gustavo Pontes", "07/12/2022", "Não", "1", "0", "0", ]
    const L1 = ["Comunicado teste 2", "-", "Gustavo Pontes", "07/12/2022", "Não", "1", "0", "0"]
    const L2 = ["Comunicado teste", "-", "Gustavo Pontes", "07/12/2022", "Não", "1", "0", "0"]
    const L3 = ["Job reaberto", "A miniatura", "Tahiti Tatiyuwa", "21/09/2022", "Não", "1", "0", "0"]
    const L4 = ["Job reaberto", "A miniatura", "Tathiana Imuta", "08/09/2022", "Não", "1", "0", "0"]
    const L5 = ["Nortificação", "A miniatura", "Miniatura Lojisrta", "06/09/2022", "Não", "1", "0", "0"]
    const L6 = ["Nortificação", "A/Z CALZATURE", "Lojista teste", "06/09/2022", "Não", "1", "0", "0"]
    const L7 = ["Comunicado", "A miniatura", "Miniatura Lojisrta", "05/09/2022", "Não", "1", "0", "0"]
    const L8 = ["Comunicado", "Comunicado", "Lojista Teste", "05/09/2022", "Não", "1", "0", "0"]
    const L9 = ["Comunicado", "#Madness", "Maltec", "05/09/2022", "Não", "1", "0", "0"]
    const L10 = ["Job reaberto", "A miniatura", "Tathiana Imuta", "02/09/2022", "Não", "1", "0", "0"]
    const L11 = ["Job reaberto", "A miniatura", "Tathiana Imuta", "02/09/2022", "Não", "1", "0", "0"]
    const L12 = ["Job reaberto", "A miniatura", "Tathiana Imuta", "25/08/2022", "Não", "1", "0", "0"]
    const L13 = ["Job reaberto", "A miniatura", "Tathiana Imuta", "25/08/2022", "Não", "1", "0", "0"]
    const L14 = ["Comunicado", "A/Z CALZATURE", "Lojista Teste", "25/08/2022", "Não", "1", "0", "0"]
    const L15 = ["Comunicado", "A miniatura", "Miniatura Lojista", "22/08/2022", "Não", "1", "0", "0"]
    const L16 = ["Job reaberto", "A miniatura", "Gustavo Pontes", "09/08/2022", "Não", "1", "0", "0"]
    const L17 = ["Job reaberto", "A/Z CALZATURE", "Eduardo Ashikawa", "02/08/2022", "Não", "1", "0", "0"]

    const list1 = L1.map(
        (l) => <td>{l}</td>
    )
    const list2 = L2.map(
        (l_2) => <td>{l_2}</td>
    )
    const list3 = L3.map(
        (l3) => <td>{l3}</td>
    )
    const list4 = L4.map(
        (l4) => <td>{l4}</td>
    )
    const list5 = L5.map(
        (l5) => <td>{l5}</td>
    )
    const list6 = L6.map(
        (l6) => <td>{l6}</td>
    )
    const list7 = L7.map(
        (l7) => <td>{l7}</td>
    )
    const list8 = L8.map(
        (l8) => <td>{l8}</td>
    )
    const list9 = L9.map(
        (l9) => <td>{l9}</td>
    )
    const list10 = L10.map(
        (l10) => <td>{l10}</td>
    )
    const list11 = L11.map(
        (l11) => <td>{l11}</td>
    )
    const list12 = L12.map(
        (l12) => <td>{l12}</td>
    )
    const list13 = L13.map(
        (l13) => <td>{l13}</td>
    )
    const list14 = L14.map(
        (l14) => <td>{l14}</td>
    )
    const list15 = L15.map(
        (l15) => <td>{l15}</td>
    )
    const list16 = L16.map(
        (l16) => <td>{l16}</td>
    )
    const list17 = L17.map(
        (l17) => <td>{l17}</td>
    )
    return (
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
                {
                    <>
                        <tr>
                            {list1}
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
                            {list2}
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
                            {list3}
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
                            {list4}
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
                            {list5}
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
                            {list6}
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
                            {list7}
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
                            {list8}
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
                            {list9}
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
                            {list10}
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
                            {list11}
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
                            {list12}
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
                            {list13}
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
                            {list14}
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
                            {list15}
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
                            {list16}
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
                            {list17}
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
                    </>

                }
            </tbody>
        </Table>
    )
}

export default Tables;