<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 


# CSCI 5709 - Winter 2023 - Assignment 01 - SemiFunctional Prototype

* *Date Created*: 09 February 2023
* *Last Modification Date*: 09 February 2023


* *Deployed Netlify Application URL*: https://csci5709-rishivasa-assignment1.netlify.app/

* *Assignment 1 Individual Private Git URL*: https://git.cs.dal.ca/vasa/csci5709_individual_b00902815/-/tree/assignment1 


## Authors

* Rishi Vasa (rishi.vasa@dal.ca) (B00902815) - Developer






## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js (npm and npx is required to install React)

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1) Install Node.js
```
https://nodejs.org/en/download/

```

2) Run the following command in terminal:
```
> npx create-react-app app-name
```


## Deployment
1) Clone the repository to a public repository which can be accessed by Netlify
2) Select Deploy Project --> Import from Git
3) Select GitLab (or whatever repository you chose)
4) Authorize Netlify to connect to your personal GitHub account
5) Select the branch you want to deploy from and configure build options
6) Site will be deployed on Netlify and a URL will be generated which you can modify (https://csci5709-rishivasa-assignment1.netlify.app/)

## Built With
1) Node.js - JavaScript based Back End

2) React - Front End JavaScript Library

3) Netlify - Deployment Environment


## Sources Used

I have referred to the following documentation and sample code for completing the assignment:
For MUI Components and starter code:
1) https://mui.com/material-ui/material-icons/
2) https://mui.com/system/getting-started/the-sx-prop/
3) https://mui.com/material-ui/api/typography/
4) https://mui.com/material-ui/getting-started/templates/
5) https://mui.com/material-ui/api/container/
6) https://react.school/material-ui/typography

For React routing:
7) https://reactrouter.com/en/main/start/tutorial

For React element spacing:
8) https://mdbootstrap.com/docs/react/utilities/spacing/

For Background Image:
9) https://wallpapercave.com/wp/wp5556216.jpg

For Lorem Ipsum Text:
10) https://www.lipsum.com/feed/html

### Dashboard.js

*Lines 52 - 130*

```
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



```

The code above was created by adapting the code in [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/) as shown below: 

```
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

```

- <!---Why---> [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/)'s Code was used because I needed a starter template to build the prototype
- <!---How---> [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/)'s Code was modified by me by adding multiple MUI elements, modifying and deleting existing ones

## Acknowledgments

* Google
* Netlify
* Brightspace
* TAs of CSCI 5709 and Professor Mosquera 
* MUI

