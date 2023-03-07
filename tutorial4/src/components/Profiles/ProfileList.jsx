import React, { useState, useEffect } from 'react';
import * as Mui from '@mui/material';
import { useNavigate } from "react-router-dom";

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
//Reference for get request: https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
//Reference for useEffect and setting state: https://reactjs.org/docs/hooks-reference.html#useeffect
//Reference for List iterating: https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs

const theme = Mui.createTheme({ palette: { mode: 'dark' } });

export default function ProfileList() {
    const navigate = useNavigate();

    const [usersList, setUsersList] = useState([]);
    
    function openUserPage(user){
        navigate('/user-profile', {state: {user}});
    };

    useEffect(() => {
        fetch('https://express-t4.onrender.com/api/users')
            .then(results => results.json())
            .then(data => { setUsersList(data) })
    }, []);

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container component="main" maxWidth="md">
                <Mui.CssBaseline />

                <Mui.Typography variant="h6">User Profiles</Mui.Typography>

                <Mui.Box sx={{ mt: 5 }}>
                    {usersList.map((user) => (
                        <div onClick={ () => openUserPage(user) }>
                            <img src ={user.picture} alt="testpic" width="200" height="200" />
                            <br />
                            {user._id}
                            <br />
                            {user.name}
                            <br /><br />
                        </div>
                    ))}

                </Mui.Box>
            </Mui.Container>
        </Mui.ThemeProvider>
    );
}
