import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import '../../../src/App.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../../../src/index.css"



export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showOffcanvasMen, setshowOffcanvasMen] = useState(false);
  const [showOffcanvasWomen, setshowOffcanvasWomen] = useState(false);

  const handleCloseOffcanvasMen = () => setshowOffcanvasMen(false);
  const handleshowOffcanvasMen = () => setshowOffcanvasMen(true);

  const handleCloseOffcanvasWomen = () => setshowOffcanvasWomen(false);
  const handleshowOffcanvasWomen = () => setshowOffcanvasWomen(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Stack direction="horizontal" gap={3} style={{borderBottom:'1px solid lightgray'}}>
        <div className="p-2" >
          <ul>
            <li>
              <img src='https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396' style={{ width: '50px', height: '50px' }} />
            </li>
            <li><a className="active" href="#home" onClick={handleshowOffcanvasMen}>Men</a></li>
            <li><a href="#news" onClick={handleshowOffcanvasWomen}>Women</a></li>
            <li><a href="#contact">Hoodies & Jackets</a></li>
            <li><a href="#about">Oversized T-Shirts</a></li>
          </ul>
        </div>

        <div className="p-2 ms-auto">
          <img
            src="https://nobero.com/cdn/shop/t/199/assets/icon-kwikpass-login.svg?v=153304588784742675891701235538"
            alt="Open Modal"
            style={{ cursor: 'pointer' }}
            onClick={handleShow} 
          />
           <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          backdrop="false"
          keyboard={false}
          style={{ position: 'absolute', top: '10%', left: '89%', transform: 'translate(-50%, 0)' }}
        >
          <Modal.Body>
            <Stack gap={4} >
              <div className="p-2" style={{borderBottom:'1px solid lightgray'}}><a href='/#'>Track Orders</a></div>
              <div className="p-2" style={{borderBottom:'1px solid lightgray'}}><a href='/#'>Return / Exchange</a></div>
              <div className="p-2" style={{borderBottom:'1px solid lightgray'}}><a href='/#'>Contact Us</a></div>
              <div className="p-2" style={{borderBottom:'1px solid lightgray'}}><a href='/#'>Review</a></div>
            </Stack>
          </Modal.Body>
          <Modal.Footer className="justify-content-center" style={{borderTop:'0px'}}>
            <Button variant="secondary" className='custom-button' style={{ background:'darkblue',color: 'aliceblue',borderRadius: '30px' ,width:'200px',height:'50px'}} onClick={handleClose}>
             login or SignUp
            </Button>
          </Modal.Footer>
        </Modal>
        </div>

        <div className="p-2">
          <img src='https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-illustration-600nw-1726574749.jpg' style={{ width: '50px', height: '50px' }} />
        </div>
      </Stack>

      <Offcanvas
        show={showOffcanvasMen}
        onHide={handleCloseOffcanvasMen}
        placement="top"
        style={{ top: '13%' }} // Position the Offcanvas below the navbar
      >
       
        <Offcanvas.Body>
 <div className='men'>
  <div className='cloths' ><img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983'/><h5 >Hhhhoodies</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Untitled_design.png?v=1692213488'/><h5>Oversized T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/7.jpg?v=1679916489'/><h5>T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/9.jpg?v=1679917418'/><h5>Co-ord sets</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Collectio_Icon_copy.png?v=1708004377'/><h5>Joggers</h5></div>
 </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showOffcanvasWomen}
        onHide={handleCloseOffcanvasWomen}
        placement="top"
        style={{ top: '13%' }} // Position the Offcanvas below the navbar
      >
       
        <Offcanvas.Body>
 <div className='men'>
  <div className='cloths' ><img src='https://nobero.com/cdn/shop/collections/1.jpg?v=1679984145'/><h5 >T-shirt</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/Untitled_design_3_3cdc79b2-d950-40e5-9a35-47a983b79c3f.jpg?v=1679997310'/><h5>Co-ord sets</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/3_7.jpg?v=1681740357'/><h5>Joggers</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/5.jpg?v=1679983950'/><h5>Luxury co-ord</h5></div>
  <div className='cloths'><img src='https://nobero.com/cdn/shop/collections/2-5.jpg?v=1679997455'/><h5> Shorts</h5></div>
  
 </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

