import { Carousel } from 'react-carousel-minimal';
import React from 'react';

const Shop = () => {
    const data = [
        {
            image: "images/all.png",
            caption: "שלושה מוצרים במבצע - 120 שקל"
        },
        {
            image: "images/body-cream.png",
            caption: "ממרח לגוף - 80 שקל"
        },
        {
            image: "images/BodyWash2.png",
            caption: "שוטף גוף - 60 שקל"
        },
        {
            image: "images/Bread-Wash.png",
            caption: "שוטף זקן - 40 שקל"
        },
        {
            image: "images/Cleaner.png",
            caption: "מנקה - 50 שקל"
        },
        {
            image: "images/Oil.png",
            caption: "שמן - 20 שקל"
        },
        {
            image: "images/shampoo.png",
            caption: "שמפו - 100 שקל"
        },
        {
            image: "images/swatch.png",
            caption: "swatch"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    return (
        <section id="shop">
            <div style={{ position: 'absolute', left: '35%' }}>
                <Carousel
                    data={data}
                    time={2000}
                    width="900px"
                    height="500px"
                    captionStyle={captionStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={true}
                    style={{
                        textAlign: "center",
                        maxWidth: "500px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
            </div>
        </section>
    );
}
export default Shop;