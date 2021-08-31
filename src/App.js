import React from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Price from './Components/Price';
import { useEffect, useState } from 'react'
import Shop from './Components/Shop';
import Appointment from './Components/Appointment';
import { useSelector } from 'react-redux';

function App() {
    const storeData = useSelector(state => state);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(storeData.AuthReducer.user ? true : false);
    }, [storeData.AuthReducer.user])

    const main = {
        name: "BARBER SHOP",
        occupation: "Computer Science BSc student",
        description: "Have knowledge and experience in Java, C++, and Python with a high level of self-learning skills. \n Looking for a student position",
        image: "profile.jpg",
        contactmessage: "Have a job for me? Want to invite me to an interview? You can give me a shout by email or by using the contact form below.",
        email: "ericsabag@gmail.com",
        phone: "050-324-4471",
        city: "Beer Sheva",
        website: " https://eric-sabag-Resume.herokuapp.com/",
        Resumedownload: "http://download1653.mediafire.com/p2w9144sbbrg/u6bjbipuddnskl5/Eric_Sabag.pdf",
        social: [
            {
                name: "facebook",
                url: "http://www.facebook.com/snir.mishaelof",
                className: "fa fa-facebook"
            },
        ],
    }

    return (
        <>
            <div className="App">
                <Header data={main} />
                <About data={main} />
                {logged ? <Appointment /> : null}
                <Gallery />
                <Price />
                <Shop />
                <Contact data={main} />
                <Footer data={main} />
            </div>
        </>
    );
}

export default App;
