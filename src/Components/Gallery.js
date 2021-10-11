import React, { useState } from 'react'
import './Gallery.css'
import 'aos/dist/aos.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [{
        url: "/images/gallery/picture1.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture2.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture3.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture4.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture5.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture6.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture7.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture8.jpg",
        name: "תספורת"
    }
        ,
    {
        url: "/images/gallery/picture9.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture10.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture11.jpg",
        name: "תספורת"
    },
    {
        url: "/images/gallery/picture12.jpg",
        name: "תספורת"
    }
    ]

    return (
        <section data-aos="fade-up" id="Gallery">
            <div className="galleryContainer">
                <h1 className="titleGallery">גלריה</h1>
                <div className="images">
                    {images && images.map((photo, index) => (
                        <div key={index} className="container-block">
                            <p className="btn">
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