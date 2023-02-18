import * as React from 'react';
import * as Mui from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

const theme = Mui.createTheme();

export default function Register() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/profile");
    };

    return (
        <Mui.ThemeProvider theme={theme}>
            <Mui.Container component="main" maxWidth="xs">
                <Mui.CssBaseline />
                <Mui.Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Mui.Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Mui.Avatar>
                    <Mui.Typography component="h1" variant="h5">
                        Sign up
                    </Mui.Typography>
                    <Mui.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Mui.Grid container spacing={2}>
                            <Mui.Grid item xs={12} sm={6}>
                                <Mui.TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <Mui.TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Mui.Grid>
                            <Mui.Grid item xs={12}>
                                <Mui.TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Mui.Grid>
                            <Mui.Grid item xs={12}>
                                <Mui.TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Mui.Grid>
                        </Mui.Grid>
                        <Mui.Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Mui.Button>
                    </Mui.Box>
                </Mui.Box>
                <div className="App">
                    <header className="App-header">
                        <p>
                            This is the website Registration page!<br />
                            <Mui.Link href="/profile">
                                Semi Functional Prototype INCOMING for USER DASHBOARD (After User Logs in)!!!!!!!
                            </Mui.Link>
                        </p>
                    </header>
                </div>
            </Mui.Container>
        </Mui.ThemeProvider>
    );
}