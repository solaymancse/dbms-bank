import React from 'react';
import * as FaIcons from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const EmployeeSidebarData = [
    {
        title: 'Add New Customer',
        path: '/add-new-customer',
        icon : <MdPersonAdd/>,
        cName: 'nav-text'
    },

    {
        title: 'Remove Customer',
        path: '/remove-customer',
        icon: <MdPersonAdd/>,
        cName: 'nav-text'
    },

    {
        title: 'Account Details',
        path: '/account-details',
        icon: <FaIcons.FaInfoCircle/>,
        cName: 'nav-text'
    },

    {
        title: 'Account Reference',
        path: '/account-reference',
        icon: <FaIcons.FaInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Credit Funds',
        path: '/credit-funds',
        icon: <RiIcons.RiRefund2Line/>,
        cName: 'nav-text'
    },

    {
        title: 'Debit Funds',
        path: '/Debit-funds',
        icon: <RiIcons.RiRefund2Line/>,
        cName: 'nav-text'
    },
    
    

]
  