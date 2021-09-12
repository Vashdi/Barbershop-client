import React, { useState } from 'react'
import './Gallery.css'
import 'aos/dist/aos.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [{
        url: "/images/picture1.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture2.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture3.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture4.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture5.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture6.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture7.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture8.jpg",
        name: "תספורת"
    }
        ,
    {
        url: "/images/picture9.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture10.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture11.jpg",
        name: "תספורת"
    },
    {
        url: "/images/picture12.jpg",
        name: "תספורת"
    }
    ]

    return (
        <section data-aos="fade-up" id="Gallery">
            <div className="galleryContainer">
                <h1 className="titleGallery">גלריה</h1>
                <div className="images">
                    {images && images.map((photo, index) => (
                        <div class="container-block">
                            <p class="btn">
                                <span>
                                    <span>
                                        <img src={photo.url} onClick={() => {
                                            setPhotoIndex(index)
                                            setIsOpen(true)
                                        }} className="modal-image" alt="" />
                                    </span>
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                    {isOpen && (
                        <Lightbox
                            clickOutsideToClose={true}
                            mainSrc={images[photoIndex].url}
                            nextSrc={images[(photoIndex + 1) % images.length].url}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                            animationDuration={500}
                        />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Gallery;