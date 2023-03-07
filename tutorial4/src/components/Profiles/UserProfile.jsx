import React, { useState, useEffect } from 'react';
import * as Mui from '@mui/material';
import { useLocation } from 'react-router-dom'

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
const theme = Mui.createTheme({ palette: { mode: 'dark' } });

export default function UserProfile() {

    const { state } = useLocation();

    const [userDetails, setUserDetails] = useState([]);


    useEffect(() => {
        fetch('https://express-t4.onrender.com/api/users/' + state.user._id)
            .then(results => results.json())
            .then(data => { console.log(data); setUserDetails(data) })
    }, []);

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container component="main" maxWidth="md">
                <Mui.CssBaseline />
                <Mui.Box sx={{ mt: 5 }}>

                    <Mui.Typography variant="h6">User Profile for {userDetails.name}</Mui.Typography>

                    <Mui.Box sx={{ mt: 5 }}>
                    <img src ={userDetails.picture} alt="testpic" width="200" height="200" />
                    <pre>{JSON.stringify(userDetails, null, 2)}</pre>

                    </Mui.Box>
                </Mui.Box>
            </Mui.Container>
        </Mui.ThemeProvider>
    );
}
