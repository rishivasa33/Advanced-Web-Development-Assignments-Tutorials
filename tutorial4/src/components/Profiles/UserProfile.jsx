import * as React from 'react';
import * as Mui from '@mui/material';

//Reference for dark Mode: https://mui.com/material-ui/customization/dark-mode/
const theme = Mui.createTheme({ palette: { mode: 'dark' } });

export default function UserProfile(props) {
  return (
    <Mui.ThemeProvider theme={theme}>
      <Mui.Container component="main" maxWidth="md">
        <Mui.CssBaseline />
        <Mui.Box sx={{ mt: 5 }}>

          <Mui.Typography variant="h6">This is the hardcoded initial Profile page after successful login!</Mui.Typography>

        </Mui.Box>
      </Mui.Container>
    </Mui.ThemeProvider>
  );
}
