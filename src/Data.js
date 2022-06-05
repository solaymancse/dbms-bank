import { MdBusinessCenter,MdOutlineSendToMobile } from 'react-icons/md'
import { GiWorld } from 'react-icons/gi'
import { BiBuildings, BiTransfer } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';

// bussiness data
import img1 from '../src/Assets/pic1.jpg'
import img2 from '../src/Assets/pic2.jpg'
import img3 from '../src/Assets/pic3.jpg'
import img4 from '../src/Assets/pic4.jpg'
import img5 from '../src/Assets/pic5.jpg'

export const FeatureOneData = [
    {
        icon:<BiBuildings/>,
        title:"Online Business",
        desc: "Explore the power of simpler and smarter banking. Bank online with over 250 services",
        link:"Apply online"
    },
    {
        icon:<MdBusinessCenter/>,
        title:"Business Plan",
        desc: "From shares to shopping centres and term deposits to toll roads, there’s a huge range of investments to choose",
        link:"Take the first step"
    },
    {
        icon:<MdOutlineSendToMobile/>,
        title:"Mobile Bank",
        desc: "Explore the power of simpler and smarter banking. Bank online with over 250 services",
        link:"Find out more"
    },
    {
        icon:<GiWorld/>,
        title:"Online Deposit",
        desc: "Explore the power of simpler and smarter banking. Bank online with over 250 services",
        link:"Learn more"
    }
];

export const SidebarData = [
    {
        icon:<FaUserAlt/>,
        title:"Profile",
        link:"profile"
    },
    {
        icon:<FcViewDetails/>,
        title:"Account Details",
        link:"account_details"
    },
    {
        icon:<BiTransfer/>,
        title:"Transaction",
        link:"transaction"
    },
    {
        icon:<BiTransfer/>,
        title:"Open Account",
        link:"register"
    },
    {
        icon:<BiTransfer/>,
        title:"new customer",
        link:"customerRegister"
    }
];
export const CustomerSidebarData = [
    {
        icon:<FaUserAlt/>,
        title:"Profile",
        link:"profile"
    },
    {
        icon:<FcViewDetails/>,
        title:"Account Details",
        link:"account_details"
    },
    {
        icon:<BiTransfer/>,
        title:"Transaction",
        link:"transaction"
    }
];

export const  BussinessBankingData = [
    {
        path:"investing",
        img:`${img1}`,
        title: "Nothing is impossible. We can help you achieve your goals!",
        desc:"The UK’s largest banking groups are required to comply with ring-fencing requirements from 1 January 2019. Find out more about our approach and what it means for you"
    },
    {
        path:"creditcard",
        img:`${img2}`,
        title: "Find the card that’s right for you. Explore the benefits.",
        desc:"Get the financial freedom you deserve. Credit cards offer exceptional benefits, rewards, services and spending power that can help make your financial and personal dreams come true."
    },
    {
        path:"paymenttech",
        img:`${img3}`,
        title: "We offer an array of products that make it possible to pay anywhere, on any device. We’re bringing solutions to life to change the way you pay – through our innovative digital wallet service."
    },
    {
        path:"card",
        img:`${img4}`,
        title: "Debit and Credit Card Protection Tips to Prevent Financial Fraud",
        desc:"Escape from the daily routine and relax at a spa, go on a thrill-seeking adventure, or take in a round of golf with pro instruction. Access restaurant reviews and make dining reservations online."
    },
    {
        path:"wallets",
        img:`${img5}`,
        title: "Privacy, Innovation and Security in the Digital Payments World",
        desc:"Easy – Load credit, debit, reloadable prepaid or small business cards from participating Alister Bank issuers. Any of your cards can be used across hundreds of thousands of supported merchants"
    },

];
