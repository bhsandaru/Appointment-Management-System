import { AppBar, Box, Button, Chip, CssBaseline, Toolbar } from "@mui/material";
import MainTopbar from "../Components/MainTopbar";
import SideDrawer from "../Components/SideDrawer";
import { Grid } from '@mui/material';

export default function HomeStudent () {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <MainTopbar/>      
        </AppBar>
        <SideDrawer/>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{borderRight: 1, borderColor: 'divider'}}>
                <Box p={2}>
                <Chip label="Scheduled Appointments" sx={{ fontSize: "1.2rem" }} />
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box p={2}>
                    <Chip label="Notifications" sx={{ fontSize: "1.2rem" }} />
                    <a href ="/saccountpage" ><Button variant='contained' sx={{ width: '100%' }}>NEST</Button></a> 
                </Box>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Box>
      
    );
  }