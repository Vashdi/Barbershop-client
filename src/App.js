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

    return (
        <div className="App">
            <Header />
            <About />
            {logged ? <Appointment /> : null}
            <Gallery />
            <Price />
            <Shop />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
