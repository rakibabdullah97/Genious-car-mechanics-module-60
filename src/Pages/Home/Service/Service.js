import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, price, description, img, id } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`./booking/${id}`}>
                <button className='m-3 btn btn-success'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;