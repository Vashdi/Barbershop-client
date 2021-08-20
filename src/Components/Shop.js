import { Carousel } from 'react-carousel-minimal';

import React from 'react';

const Shop = () => {
    const data = [
        {
            image: "images/picture1.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture2.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture3.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture4.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture5.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture6.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture7.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture8.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture9.jpg",
            caption: "Snir-Barbershop"
        },
        {
            image: "images/picture10.jpg",
            caption: "Snir-Barbershop"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    return (
        <section id="shop">
            <div>
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="50px"
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={true}
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "700px",
                        margin: "40px auto",
                    }}
                />
            </div>
        </section>
    );
}
export default Shop;