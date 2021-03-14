import React, { useState } from "react";
import {Modal , Button} from 'react-bootstrap'

function DeleteModal(props) {
    const [smShow, setSmShow] = useState(false);
  
    return (
      <>
        {/* <Button onClick={() => setSmShow(true)}>Small modal</Button> */}
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Sure You Want to delete?</Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default DeleteModal