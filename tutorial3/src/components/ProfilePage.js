import * as React from 'react';
import * as Mui from '@mui/material';
import Link from '@mui/material/Link';

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
const theme = Mui.createTheme({ palette: { mode: 'dark' } });

export default function Profile() {
  return (
    <Mui.ThemeProvider theme={theme}>
      <Mui.Container component="main" maxWidth="xs">
        <Mui.CssBaseline />
        <Mui.Box sx={{ mt: 5 }}>

          <Mui.Typography variant="h6">This is the hardcoded initial Profile page after successful login!</Mui.Typography>

          <Mui.Box sx={{ mt: 5 }}>
            <Mui.Typography variant="h6"> First Name: Rishi</Mui.Typography>
            <Mui.Typography variant="h6"> Last Name: Vasa</Mui.Typography>
            <Mui.Typography variant="h6"> Email: B00902815@dal.ca</Mui.Typography>
          </Mui.Box>

          <Mui.Box sx={{ mt: 5 }}>
            <Link href="/">
              Go Back to Registration Page!
            </Link>
          </Mui.Box>

        </Mui.Box>
      </Mui.Container>
    </Mui.ThemeProvider>
  );
}