import * as React from 'react';
import * as Mui from '@mui/material';
import { useNavigate } from "react-router-dom";

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
//Reference for post request: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

const theme = Mui.createTheme({ palette: { mode: 'dark' } });

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": email, "password": password })
        };
        const response = await fetch('https://express-t4.onrender.com/api/login', requestOptions);
        const apiResponse = await response.json();

        if (apiResponse.message === "Login success!") {
            navigate("/profiles");
        } else {
            alert(apiResponse.message);
        }
    };

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container component="main" maxWidth="md">
                <Mui.CssBaseline />
                <Mui.Box sx={{ mt: 5 }}>

                    <Mui.Typography variant="h6">Tutorial 4 Login Form</Mui.Typography>

                    <Mui.Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                        <Mui.Grid container spacing={2}>
                            <Mui.Grid item>
                                <Mui.TextField id="email" name="email" label="Email Address" type="email" required />
                            </Mui.Grid>
                            <Mui.Grid item>
                                <Mui.TextField id="password" name="password" label="Password" type="password" required />
                            </Mui.Grid>
                        </Mui.Grid>

                        <Mui.Button type="submit" variant="contained" sx={{ mt: 3 }}>Login</Mui.Button>

                    </Mui.Box>
                </Mui.Box>
            </Mui.Container>
        </Mui.ThemeProvider>
    );
}
