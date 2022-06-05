import React, { useState,useEffect } from "react";

import { Wrapper } from './ListTableElements'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

export const ListTable = () => {

  const [customer, setCustomer] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/customer/getCustomers", {
      withCrendentials: true,
    })
    .catch((err)=> console.log(err));

    const data = await res.data;

    return data;
  }
  useEffect(()=> {
    sendRequest().then((data)=> setCustomer(data));
  }, []);

 
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table
          style={{ marginTop: "10px" }}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Account Number</TableCell>
              <TableCell align="left">Opening Date</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((data) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {data._id}
                </TableCell>
                <TableCell align="left">{data.name}</TableCell>
                <TableCell align="left">{data.email}</TableCell>
                <TableCell align="left">
                  <cellWarapper>
                    <p>{data.accountNumber}</p>
                  </cellWarapper>
                </TableCell>             
                <TableCell align="left">{data.date}</TableCell>        
                <TableCell  align="center"><Link style={{color:"#3FACDA"}} to={`edit/${data._id}`}><FiEdit/></Link></TableCell>
                <TableCell align="center"><a style={{color:"#5ABF31"}}  href="/view"><AiOutlineEye/></a></TableCell>
                <TableCell align="center"><a style={{color:"red"}} href="/delete"><MdDelete/></a></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
    </Wrapper>
  );
};
