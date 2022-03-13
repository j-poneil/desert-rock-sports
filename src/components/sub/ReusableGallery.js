//! Reusable gallery component that takes the photos in as props... an array of objects
import React, { useState, useCallback } from 'react';

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";




/*
    Sources, etc
    https://github.com/neptunian/react-photo-gallery?ref=morioh.com&utm_source=morioh.com
    https://neptunian.github.io/react-photo-gallery/
    https://codesandbox.io/s/5vn3lvz2n4?file=/index.js
    https://github.com/jossmac/react-images
    https://jossmac.github.io/react-images/#/

    npm install react-photo-gallery react-images
    NOT SURE IF I'LL DO THIS: ( npm install react-sizeme )

    Here, react-photo-gallery is handling the responsive auto row or column justified layout by resizing images and maintaining aspect ratios appropriately to get an attractive tiling. Row seems the most appropriate here. The click on lightbox functionality is borrowed from react-images.

    NOT SURE IF I'll IMPLEMENT THIS:
    react-sizeme finds the dimensions of the gallery container so that at different screen sizes the image sizes stay suitable... without this they were initially too small at normal desktop size.

    There are benefits and drawbacks of going this route compared to what I had tried previously, but overall I think I'll like this way more.

    react-intense
        Looks sweet, kinda curious about using it instead of the lightbox... but also no zoom... but does pan with mouse movement
        Also, MUCH better pic title and subtitle / caption

    react-zoom-pan-pinch
        Also looks like a good option... but no captions
        (npm install --save react-zoom-pan-pinch)
        ... can wrap
            <TransformWrapper>
                <TransformComponent>
                    <Carousel>
                <TransformWrapper>
            <TransformComponent>
        ... and that gives scroll zooming, but when you click to pan it closes the modal
        ... so need to override that functionality to only closing when click outside the img border... ?
        ... ALSO kinda messes up the caption position/color
*/

// span.react-images__footer__caption > span
//     font-weight: bold
//     font-size: medium
//     color: black //supposed to get overwritten by the rule below
//     -webkit-text-fill-color: white
//     -webkit-text-stroke-width: 1px
//     -webkit-text-stroke-color: black

// .react-images__footer > span
//     font-weight: bold
//     font-size: medium
//     color: black //supposed to get overwritten by the rule below
//     -webkit-text-fill-color: white
//     -webkit-text-stroke-width: 1px
//     -webkit-text-stroke-color: black

// can't get this to work... like this
const testStyles = {
    fontWeight: 'bold',
    fontSize: 'medium',
    color: 'black',
    webkitTextFillColor: 'white',
    webkitTextStrokeWidth: '1px',
    webkitTextStrokeColor: 'black'
};






const ReusableGallery = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery
                photos={props.photos}
                onClick={openLightbox}
                // px number or containerWidth, optional. Default of not including/passing this is good, but on large screens the images are a bit small
                targetRowHeight={500}
            />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal
                        onClose={closeLightbox}
                        closeOnBackdropClick={true} // default is true
                    >
                        {/* <TransformWrapper>
                            <TransformComponent> */}
                                <Carousel
                                    currentIndex={currentImage}
                                    views={props.photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            {/* </TransformComponent>
                        </TransformWrapper> */}
                    </Modal>
                ) : null}
            </ModalGateway>
                
        </div>
    )
}

export default ReusableGallery;
