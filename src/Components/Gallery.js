import React from 'react'
import './Gallery.css'
import ModalImage from "react-modal-image";
import 'aos/dist/aos.css';

const Gallery = () => {

    const photos = [{
        url: "/images/picture1.jpg",
        name: "cream"
    },
    {
        url: "/images/picture2.jpg",
        name: "cream"
    },
    {
        url: "/images/picture3.jpg",
        name: "cream"
    },
    {
        url: "/images/picture4.jpg",
        name: "cream"
    },
    {
        url: "/images/picture5.jpg",
        name: "cream"
    },
    {
        url: "/images/picture6.jpg",
        name: "cream"
    },
    {
        url: "/images/picture7.jpg",
        name: "cream"
    },
    {
        url: "/images/picture8.jpg",
        name: "cream"
    }
        ,
    {
        url: "/images/picture9.jpg",
        name: "cream"
    },
    {
        url: "/images/picture10.jpg",
        name: "cream"
    },
    {
        url: "/images/picture4.jpg",
        name: "cream"
    },
    {
        url: "/images/picture5.jpg",
        name: "cream"
    }
    ]

    return (
        <section data-aos="fade-up" id="Gallery">
            <div className="images">
                {photos && photos.map(photo => (
                    <div data-aos="flip-up" class="container-block">
                        <p class="btn">
                            <span>
                                <span>
                                    <ModalImage
                                        small={photo.url}
                                        large={photo.url}
                                        alt={photo.name}
                                        hideDownload={true}
                                        hideZoom={true}
                                        className="modal-image"
                                    />
                                </span>
                            </span>
                        </p>
                    </div>
                ))}


            </div>

        </section>
    )
}

export default Gallery;