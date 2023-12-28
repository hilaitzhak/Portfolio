/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import './home.scss';
import cartoonGirl from '../../assets/welcome.png';
import '../content/content.scss';

function AppHome() {
    const [typedTextHila, setTypedTextHila] = useState('');
    const [typedTextEngineer, setTypedTextEngineer] = useState('');
    
    const typingEffect = async (text:any, setTextFunction:any) => {
        for (let i = 0; i < text.length; i++) {
            setTextFunction(text.substring(0, i + 1));
            await new Promise(resolve => setTimeout(resolve, 70));
        }
    }

    const typingFullAnimation = () => {
        typingEffect("I'm Hila", setTypedTextHila);
        setTimeout(() => {
            typingEffect("Software Engineer", setTypedTextEngineer);
        }, 1000);
    }
    
    
    useEffect(() => {
        typingFullAnimation();
        setInterval(typingFullAnimation, 8000);
    }, []);
    
    
    return (
        <section id="home">
            <div className="home-wrapper section-container">
                <div className="home-text-container">
                    <span className="text-hello">Hello,</span>
                    <span className="home-title">
                        <span className="typed-text">{typedTextHila}</span><br/>
                        <span className="typed-text role-title-color">{typedTextEngineer}</span>
                    </span>
                </div>
                <div className="home-image-container">
                    <img className="home-image" src={cartoonGirl} alt="cartoon-girl" />
                </div>
            </div>
        </section>
    );
}

export default AppHome;
