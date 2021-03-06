import React from 'react';
import ResponsiveCarousel from './ResponsiveCarousel';
import Footer from './../footer/Footer';
import About from './About';


const Landing = () => {

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col landing">
                    <ResponsiveCarousel />
                </div>
            </div>
        </div>
        <About />
        <Footer />
        </>
    );
}

export default Landing;
