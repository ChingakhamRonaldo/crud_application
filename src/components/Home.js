import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableCell, TableBody, TableRow, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);


    const useStyle = makeStyles({
        row: {
            '& > *': {
                fontSize: 15,

            }
        }

    })

    const classes = useStyle();


    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3004/users/${id}`)
        loadUsers()
    }


    return (
        <>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell> Id </TableCell>
                        <TableCell> Name </TableCell>
                        <TableCell> User Name </TableCell>
                        <TableCell> Email </TableCell>
                        <TableCell>  </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        users.map((user, idx) => {
                            const { id, name, username, email } = user;
                            return (
                                <TableRow key={idx} className={classes.row}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{username}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>
                                        <Button
                                            component={Link}
                                            to={`./edit/${id}`}
                                        >
                                            <EditIcon />
                                        </Button>
                                        <Button
                                            onClick={() => deleteUser(id)}
                                        > <DeleteIcon /> </Button>
                                        <Button
                                            component={Link}
                                            to={`./viewUser/${id}`}
                                        >
                                            <VisibilityIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>

            </Table>
        </>
    )
}

export default Home
