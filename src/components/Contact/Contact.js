import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt ,faPhoneVolume,faUser} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const styelSheet = {
        height: '1rem',
        marginTop: '1rem'

    }
    return (
             <div style={styelSheet}>
                <FontAwesomeIcon icon={faMapMarkedAlt} className='icon'/><small>136 Gulshan Avenue, Circle 2, Gulshan, Dhaka, Bangladesh</small>
                <small><FontAwesomeIcon icon={faPhoneVolume}/>0293829-892</small>
                <small> <FontAwesomeIcon icon={faUser}/>1583</small>
             </div>

    );

};

export default Contact;