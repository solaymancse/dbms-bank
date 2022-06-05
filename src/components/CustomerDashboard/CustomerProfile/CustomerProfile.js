import React, { useState,useEffect } from "react";

import { TableContainer, TableHead, TableRow,Table,TableCell,TableBody} from "@mui/material";
import img from "../../../Assets/profileImg.jpg";
import {
  Wrapper,
  Left,
  Right,
  ProImg,
  Detail,
  TopDetail,
  Desc,
  BottomDetail,
  H4,
  Top,
  TopDiv,
  H2,
  BottomDiv,
  Account,
  P,
  Bal,
  H3,
  Amount,
  Bottom,
  Links
} from "../../DashBoard/Profile/ProfileElements";

import Modal from 'react-modal';
import  Paper  from "@mui/material/Paper";
import  axios from 'axios';
Modal.setAppElement('#root');
axios.defaults.withCredentials = true;

export const CustomerProfile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [customer, setCustomer] = useState();
  const rows = [
    {
      id: 1143155,
      date: "1 March",
      amount: 785,
    },
    {
      id: 2235235,
      date: "1 March",
      amount: 900,
    }
   
  ];
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/customer/logout", null, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  useEffect(() => {
  
      
      sendRequest().then((data) => setCustomer(data));
    
   

   
  }, []);
  return (
    <Wrapper>
      <Left>
        <ProImg src={img} alt="/" />
        <Detail>
          <TopDetail>
            <H2>My Profile</H2>
            <Desc>
              Lorem ipsum lorem impsum
              <br />
              Baizid bostami Chittagong
            </Desc>
          </TopDetail>
          <BottomDetail>
            {customer && <H4>{customer.name}</H4>}
            <H4>01864472623</H4>
            {customer && <H4>{customer.email}</H4>}
            <H4>baizid Bostami Chtittagong</H4>
          </BottomDetail>
          <Links onClick={openModal}>Edit</Links>
          <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        </Detail>
      </Left>
      <Right>
        <Top>
          <TopDiv>
            <H2>My Accounts</H2>
            <a href="/edit">Edit</a>
          </TopDiv>
          <BottomDiv>
            <Account>
              <H3>Account Number</H3>
              <P>1803510201686</P>
            </Account>
            <Account>
              <H3>Last Deposit</H3>
              <Amount>$40</Amount>
            </Account>
            <Account>
              <H3>Last Withdraw</H3>
              <Amount>$40</Amount>
            </Account>
            <Bal>
              <H3>Current Balance</H3>
              <Amount>$400</Amount>
            </Bal>
            
          </BottomDiv>
        </Top>
        <Bottom>
          <TopDiv>
            <H2>My Transaction</H2>
            <a href="/filter">filter</a>
          </TopDiv>
          <BottomDiv>
            <TableContainer component={Paper}>
              <Table style={{marginTop:'0'}}sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Transaction</TableCell>
                    <TableCell align="left">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>

                      <TableCell align="left">{row.amount}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </BottomDiv>
        </Bottom>
      </Right>
    </Wrapper>
  );
};
