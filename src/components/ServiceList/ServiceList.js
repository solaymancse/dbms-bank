import React from 'react';
import './ServiceList.css';
import { Container } from 'react-bootstrap';

const ServiceList = () => {
    const serviceList = ['Personal Banking','Business Banking','Lending','About Us','Financial Answer Center']
    return (
        <div className="list-item">
            <Container>
            {
                serviceList.map(list => <li className='list'>{list}</li>)
            }
            </Container>
            

        </div>
    );
};

export default ServiceList;