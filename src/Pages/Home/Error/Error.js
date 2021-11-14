import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from "./error/3747371.jpg"
const Error = () => {
    return (
        <div className='container'>
            <img style={{width
            :'100%'}} src={errorPic} alt="" />
            <Link to='/'> go back</Link>
        </div>
    );
};

export default Error;
