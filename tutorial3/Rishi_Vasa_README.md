<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 


# CSCI 5709 - Winter 2023 - Tutorial 3

* *Date Created*: 17 February 2023
* *Last Modification Date*: 17 February 2023


* *Deployed Netlify Application URL*: https://csci5709-rishivasa-tutorial3.netlify.app/

* *Tutorial 3 Individual Private Git URL*: https://git.cs.dal.ca/vasa/csci5709_individual_b00902815/-/tree/tutorial3


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
6) Site will be deployed on Netlify and a URL will be generated which you can modify (https://csci5709-rishivasa-tutorial3.netlify.app/)

## Built With
1) Node.js - JavaScript based Back End

2) React - Front End JavaScript Library

3) Netlify - Deployment Environment


## Sources Used

I have referred to the following documentation and sample code for completing the assignment:
For MUI starter template code:
1) https://mui.com/material-ui/getting-started/templates/

For React routing:
2) https://reactrouter.com/en/main/start/tutorial

For React form Validation:
3) https://www.npmjs.com/package/validator

For Dark Mode:
4) https://mui.com/material-ui/customization/dark-mode/

### Register.js

*Lines 56 - 88*

```

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

```

The code above was created by adapting the code in [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/) as shown below: 

```
  <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

```

- <!---Why---> [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/)'s Code was used because I needed a starter template to build the boilerplate code
- <!---How---> [Sample Material UI Template](https://mui.com/material-ui/getting-started/templates/)'s Code was modified by me completely by adding multiple different MUI elements, modifying and deleting existing ones, adding routing and validation to each field 

## Acknowledgments

* Google
* Netlify
* TAs of CSCI 5709 and Professor Mosquera 
* MUI

