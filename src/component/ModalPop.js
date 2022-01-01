import { React } from 'react'
import { Button, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import './css/modal.css'
export const ModalPop = (props) => {
  const { Show, handleClose } = props

  return (
    <div>
      <Modal aria-labelledby="example-modal-sizes-title-lg" show={Show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className='h'>Invite New Member</span><br />
          </Modal.Title>
        </Modal.Header>
        <div className='mbody'>
          <span className='h2'>import from a list</span><br />
          <input type='text' placeholder="File name" className='in' />&nbsp;&nbsp;<button className='b'>Search</button><br />
          <span><span className='p'>Accepted format</span><span className='p2'>:csv/excel</span></span><br /><br /><br /><br />
          <span className='eml'>ivite with email</span><br />
          <input type="email" placeholder='Enter Email address' className='in2' />
        </div>
      </Modal>
    </div>
  )
}
