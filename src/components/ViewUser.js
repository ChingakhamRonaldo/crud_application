import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';





const ViewUser = () => {


    const useStyle = makeStyles({
        table: {
            width: '33%',
            margin: 'auto',
            paddingLeft: '100px',
            marginTop: '20px'

        }
    })

    const classes = useStyle();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = user;

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    }


    const { id } = useParams();
    return (
        <div className={classes.table}>
            <Typography variant="h4">
                User Data
            </Typography>
            <TableBody>
                <TableRow>
                    <TableCell >Sl.no :-{id}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>NAME :-{name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>USERNAME :-{username}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>EMAIL :-{email}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>PHONE NO. :-{phone}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>WEBSITE :-{website}</TableCell>
                </TableRow>

            </TableBody>

        </div>
    )
}

export default ViewUser
