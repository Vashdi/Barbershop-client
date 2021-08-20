import React from 'react'
import Whirligig from 'react-whirligig'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Gallery = () => {
    let whirligig;
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()

    return (
        <section id="Gallery">
            <button style={{ marginLeft: '48%' }}><ArrowLeftIcon onClick={prev} /></button>
            <Whirligig
                visibleSlides={3}
                gutter="1em"
                ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
            >
                <img style={{ width: '100%', height: '90%' }} src="images/picture1.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture2.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture3.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture4.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture5.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture6.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture7.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture8.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture9.jpg" alt="none" />
                <img style={{ width: '100%', height: '90%' }} src="images/picture10.jpg" alt="none" />
            </Whirligig>
            <button style={{ marginLeft: '48%' }} onClick={next}><ArrowRightIcon /></button>
        </section>
    )
}

export default Gallery;