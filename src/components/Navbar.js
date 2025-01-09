import { Button, Container, Navbar, Modal } from 'react-bootstrap'

function NavbarComponent() {

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Giving Days Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>

            </Modal>
        </>
    )

}


export default NavbarComponent;