import { Modal } from "react-bootstrap";


const MyOrderModal = ({setShowOrderModal,showOrderModal}) => {
    
    const closeOrderModal = () => {
        setShowOrderModal(false);
      };

    return (<>
        <Modal showOrderModal={showOrderModal} onHide={closeOrderModal} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>Profile</Modal.Title>
  </Modal.Header>
  <Modal.Body>

    Aca estaria todo el contenido de  ordenes de usuario
    {/* Contenido del modal */}
  </Modal.Body>
</Modal>

    </>)
}
export default MyOrderModal;