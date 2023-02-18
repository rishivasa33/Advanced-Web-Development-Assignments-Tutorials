import * as React from 'react';
import * as Mui from '@mui/material';
import { useNavigate } from "react-router-dom";
import validator from 'validator'

//Reference for Form Validation: https://www.npmjs.com/package/validator
//Reference for Form Page Template: https://mui.com/material-ui/getting-started/templates/

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
const theme = Mui.createTheme({palette: {mode: 'dark'}});

export default function Register() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        if (!validator.isAlpha(firstName)) {
            alert('First Name should contain only alphabets!');
            return;
        }
        if (!validator.isAlpha(lastName)) {
            alert('Last Name should contain only alphabets!');
            return;
        }
        if (!validator.isEmail(email)) {
            alert('Enter Valid Email ID!');
            return;
        }
        else if (!validator.isLength(password, {min:8})) {
            alert('Password length should be greater than 8 characters');
            return;
        }
        else if(!validator.isStrongPassword(password, {minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
            alert('Password should contain at least 1 lowercase, uppercase, numeric and special character');
            return;
        }
        else if (!validator.equals(password, confirmPassword)) {
            alert('Passwords Do Not Match!');
            return;
        }
        else {
            navigate("/profile");
        }
    };

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container component="main" maxWidth="xs">
                <Mui.CssBaseline />
                <Mui.Box sx={{ mt: 5 }}>

                    <Mui.Typography variant="h6">Tutorial 3 Registration Form</Mui.Typography>

                    <Mui.Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                        <Mui.Grid container spacing={2}>
                            
                            <Mui.Grid item>
                                <Mui.TextField id="firstName" name="firstName" label="First Name" autoFocus required />
                            </Mui.Grid>
                            
                            <Mui.Grid item>
                                <Mui.TextField id="lastName" name="lastName" label="Last Name" required />
                            </Mui.Grid>

                            <Mui.Grid item>
                                <Mui.TextField id="email" name="email" label="Email Address" type="email" required />
                            </Mui.Grid>
                            
                            <Mui.Grid item>
                                <Mui.TextField id="password" name="password" label="Password" type="password" required />
                            </Mui.Grid>

                            <Mui.Grid item>
                                <Mui.TextField id="confirmPassword" name="confirmPassword" label="Confirm Password" type="password" required />
                            </Mui.Grid>

                        </Mui.Grid>
                        
                        <Mui.Button type="submit" variant="contained" sx={{ mt: 3 }}>Sign Up</Mui.Button>
                    
                    </Mui.Box>
                </Mui.Box>
            </Mui.Container>
        </Mui.ThemeProvider>
    );
}