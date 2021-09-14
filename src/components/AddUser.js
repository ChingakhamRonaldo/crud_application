import { Button, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    Form: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 10
        }
    }
})



const AddUser = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    const history = useHistory();

    const { name, username, email, phone, website } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })

    }


    const onSubmit = async () => {
        const response = await axios.post('http://localhost:3004/users', user);
        console.log(response.data)
        history.push('/')
    }


    const classes = useStyle();

    return (
        <FormGroup className={classes.Form}>
            <FormControl>
                <InputLabel> Name </InputLabel>
                <Input
                    value={name}
                    name="name"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <InputLabel> User Name </InputLabel>
                <Input
                    value={username}
                    name="username"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <InputLabel> Email </InputLabel>
                <Input
                    value={email}
                    name="email"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <InputLabel> Phone </InputLabel>
                <Input
                    value={phone}
                    name="phone"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <InputLabel> Website </InputLabel>
                <Input
                    value={website}
                    name="website"
                    onChange={handleChange}
                />
            </FormControl>

            <Button variant='contained' color='primary' onClick={() => onSubmit()} > Add User</Button >

        </FormGroup>

    )
}

export default AddUser;