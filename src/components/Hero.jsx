import React, { useState } from 'react';
import image from '../assets/images/image.png';
import './Hero.css';

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        // Calculate mouse position relative to the center of the hero section
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        setMousePosition({ x, y });
    };

    return (
        <div className='hero-section' onMouseMove={handleMouseMove}>
            <div className='hero-image'>
                <img className='image' src={image} alt="Background" />
            </div>
            <p
                className='name'
                style={{
                    transform: `translate(${mousePosition.x * 0.05}px)`,
                }}
            >
                MAHAK
            </p>
            <p
                className='surname'
                style={{
                    transform: `translate(${mousePosition.x * 0.05}px)`,
                }}
            >
                KANKARIA
            </p>
            <p
                className='para1'
                style={{
                    transform: `translate(${mousePosition.x * 0.05}px`,
                }}
            >
                FULL-STACK
            </p>
            <p
                className='para2'
                style={{
                    transform: `translate(${mousePosition.x * 0.05}px`,
                }}
            >
                DEVELOPER
            </p>
        </div>
    );
}
