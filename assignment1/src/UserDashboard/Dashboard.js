import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import CultureNetLogo from '@mui/icons-material/Diversity1';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import ProfileIcon from '@mui/icons-material/PermIdentity';
import MoviesImg from './Movies.jpg';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3];

const theme = createTheme();

function DashboardContent() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme} >
                <CssBaseline />

                {/* PRIMARY NAVBAR */}

                <AppBar position="static" color="default">
                    <Toolbar>
                        <CultureNetLogo sx={{ mr: 2 }} />

                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            CultureNet
                        </Typography>
                        <Link color="text.primary" href="/home" sx={{ mr: 2}}>Home</Link>
                        <Link color="text.primary" href="#">Edit Profile</Link>
                        <Link color="text.primary" href="#"><SearchIcon sx={{ ml: 1, pt: 1 }} /></Link>

                        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Logout
                        </Button>

                    </Toolbar>
                </AppBar>

                {/* BODY */}
                <main>

                    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
                        <ProfileIcon />
                        <Typography
                            component="h1"
                            variant="h3"
                            align="left"
                            color="text.primary"
                        >
                            Welcome, User
                        </Typography>

                        <Typography
                            variant="h7"
                            align="left"
                            color="text.secondary"
                            component="p"
                            display="block"
                        >
                            This text is your profile Bio that other user's can read and connect with you over.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt suscipit velit sed scelerisque.
                        </Typography>
                    </Container>



                    {/* SECONDARY NAV BAR */}
                    <Container maxWidth="md"  >
                        <AppBar
                            position="static"
                            color="default"
                            elevation={0}
                        >
                            <Toolbar style={{ flex: 1, justifyContent: 'space-evenly' }}>
                                <Button variant="contained" href="">FILMS</Button>
                                <Button variant="outlined" href="">SHOWS</Button>
                                <Button variant="outlined" href="">MUSIC</Button>
                                <Button variant="outlined" href="">BOOKS</Button>
                                <Button variant="outlined" href="">WATCHLIST</Button>
                                <Button variant="outlined" href="">ACTIVITY</Button>
                                <Button variant="outlined" href="">NETWORK</Button>
                            </Toolbar>
                        </AppBar>
                    </Container>
                    {/* End SECONDARY NAV BAR */}

                    <Container sx={{ py: 4 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} md={4}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            sx={{ pt: 8 }}
                                            image={MoviesImg}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                Movie Title #{card}
                                            </Typography>
                                            <Typography>
                                                This is a random description of the corresponding movie {card}. Lorem ipsum Lorem ipsum.
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ flex: 1, justifyContent: 'space-evenly' }}>
                                            <Button size="small">View Your Review</Button>
                                            <StarIcon></StarIcon>
                                            <StarIcon></StarIcon>
                                            <StarBorderIcon></StarBorderIcon>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* End BODY */}


                {/* Footer */}
                <Container
                    component="footer"
                    sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        mb: 4,
                    }}
                >
                    <Typography align="center">
                        {'Copyright © '}
                        <Link href="/home">
                            CultureNet
                        </Link>
                        {'  2023  '}
                    </Typography>
                    <Typography align="center">
                        {'Authored By: Rishi Vasa for CSCI5709: Assignment 1 (SemiFunctional Prototype)'}
                    </Typography>
                </Container>
                {/* End footer */}
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}