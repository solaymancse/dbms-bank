import React from 'react';
import * as FaIcons from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const CustomerSidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon : <MdPersonAdd/>,
        cName: 'cust-nav-text'
    },

    {
        title: 'Account Details',
        path: '/account-details',
        icon: <MdPersonAdd/>,
        cName: 'cust-nav-text'
    },

    {
        title: 'Transaction',
        path: '/transaction',
        icon: <FaIcons.FaInfoCircle/>,
        cName: 'cust-nav-text'
    },

    {
        title: 'Pay Bill',
        path: '/pay-bill',
        icon: <FaIcons.FaInfoCircle/>,
        cName: 'cust-nav-text'
    },
    {
        title: 'Debit Funds',
        path: '/debit-funds',
        icon: <RiIcons.RiRefund2Line/>,
        cName: 'cust-nav-text'
    },

    
    

]
  