import React from 'react';
import './ServiceList.css';


const ServiceList = () => {
    const serviceList = ['Latest News','Personal Banking', 'Business Banking', 'Lending', 'About Us', 'Financial Answer Center', 'Privilege', 'Private', 'Wealth', 'Corporate', 'Deals & More', 'Interest', 'Help']
    return (
        <div className="list-item container-marg">
           
                {
                    serviceList.map(list => <li className='list'>{list}</li>)
                }
           


        </div>
    );
};

export default ServiceList;