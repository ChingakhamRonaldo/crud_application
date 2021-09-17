import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Constant

import * as urlCont from '../helper/constant';


const useStyle = makeStyles({
    header: {
        background: '#3C353B',
    },
    tabs: {
        color: "white",
        marginRight: 20,
        fontSize: 20
    },
})

const NavBar = () => {

    const history = useHistory();

    function handleButton(btn) {
        switch (btn) {
            case "home":
                console.log("Home Click")
                history.push(urlCont.HOME)
                break;
            case "addUser":
                console.log("Add User Click")
                history.push(urlCont.ADDUSER)
                break;

            default:
                break;
        }
    }



    const classes = useStyle();

    return (
        <>

            <AppBar position='static' className={classes.header}>
                <Toolbar>
                    <Typography
                        className={classes.tabs}
                        onClick={() => handleButton("home")}
                    >
                      Show User
                    </Typography>

                    <Typography
                        className={classes.tabs}
                        onClick={() => handleButton("addUser")}
                    >
                        Add User
                    </Typography>




                </Toolbar>
            </AppBar>

        </>
    )
}

export default NavBar;