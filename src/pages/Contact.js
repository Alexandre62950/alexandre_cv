import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contac'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contact me</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span> Warsaw</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text="+48 603 788 673">
                                <span 
                                className='clickInput' 
                                onClick={() => {alert("phone copied");}}> +48 603 788 673</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text="kot.alexandre@hotmail.com">
                                <span 
                                className='clickInput' 
                                onClick={() => {alert("mail copied");}}> kot.alexandre@hotmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className='"fab fa-linkedin'></i>
                        </a>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className='"fab fa-github'></i>
                        </a>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className='"fab fa-twitter'></i>
                        </a>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className='"fab fa-codepen'></i>
                        </a>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;