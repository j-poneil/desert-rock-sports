import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// https://react-bootstrap.github.io/components/modal/#vertically-centered
// Rough outline of all this from here

// BUT fullscreen='true' is only available with bootstrap 5, we are using 4... not the first hiccup between these versions I have ran into.
// Will use a custom CSS class to get it sized the way I want... maybe

// It seems I MUST have a solution which handles different screen sizes differently.
// Small screens -- full screen
// Larger screens -- centered

//! Never got this working the way I wanted, so sidelining it for now

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName='newsletterSignupModal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    title="drs_newsletter_signup"
                    // width="540"
                    // height="305"
                    // width='auto'
                    // height='auto'
                    src="https://2c266a7f.sibforms.com/serve/MUIEAM3-n6DUdKdmKyY8RnbFn8IMd68VoUUAMULZxht-LcvCJDbx-HoHNoULKKMYJ85AlBjFIykgfktf9syZecXV_QBvsb6bUushhXdAPdIg0p2c7eoV7doJ9ir8cOTN6qISu7uWWO4TPACpd6wypYpalL0iHxap9NlXHoGcN-mr049G7EBvsjyaWoTCH--7MYtSjEp-YFve52cl"
                    frameborder="0"
                    scrolling="auto"
                    allowfullscreen
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100vh',
                        width: '100vw',
                        // height: 70vh gets very close to desired effect
                        height: '70vh'
                    }}>
                </iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const NewsletterModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Subscribe to our newsletter
            </Button>

            {/* style={{width: '100%', maxWidth: 'none', margin: 0}} */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default NewsletterModal;