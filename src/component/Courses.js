import { React, useState } from 'react'
import { Button, Col, Container, Form, FormControl, Row, Table } from 'react-bootstrap';
import './css/course.css'
import { ModalPop } from './ModalPop';
import { TableList } from './TableList';

export const Courses = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <div >
                <ModalPop Show={show} handleClose={handleClose} />
            </div>
            <Container className='body'>
                <Row className='R1'>
                    <Col lg={4} className='C1'><Form className="d-flex">
                        <i class="bi bi-search"></i>&nbsp;&nbsp;
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <i class="bi bi-filter"></i>
                    </Form></Col>
                    <Col lg={6}></Col>
                    <Col lg={2} className='flex-end C2'> <button variant="primary" className='clik1' onClick={handleShow}> <i class="bi bi-plus"></i> Add Course</button></Col>
                </Row>
                <Row className='R2'>
                    <Col lg={2}><a style={{ textDecoration: "none" }} href='./dashboard'> <i class="bi bi-arrow-left-short" /> </a>Negotiation</Col>
                    <Col lg={6}></Col>
                    <Col lg={3}><button className='clik2'><i class="bi bi-share" />share</button>&nbsp;<button className='clik3'><i class="bi bi-plus" />Add Session</button></Col>
                </Row>
                <Container className='Table'>
                    <Row className='R3'><Col lg={6}>Session&nbsp;&nbsp;&nbsp;&nbsp; Registrants&nbsp;&nbsp;&nbsp;&nbsp; Settings</Col>
                        <Col lg={2}></Col>
                        <Col lg={3}>
                            <button className='clik4' onClick={handleShow}><i class="bi bi-upload"></i>Export</button>&nbsp;&nbsp;
                            <button className='clik5' onClick={handleShow}><i class="bi bi-person-plus"></i>Invite</button>
                        </Col></Row>
                    <Row className="justify-content-md-center R4">
                        <Col className='tabledata'>
                            <TableList />
                        </Col>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}
