import { Box, Button, Card, CardActionArea, CardContent, Divider, List, ListItem, Stack, TextField, Typography } from "@mui/material";
import { CenterHeaderCard } from "../Components/CenterHeaderCard";


export default function LoginPage () {
    return (
        <Box sx={{ flexGrow: 1,maxWidth: 2000, height: 850}} >
           
             <Card sx={{ maxWidth: 2000, height: 850}} >
             <CardActionArea >
            
                <CenterHeaderCard title={"Appointment Management System"} >
                    <Stack sx={{backgroundColor:"#C5ECF1" }} direction = {'row'} height={300} width={500} alignItems={"center"} >
                    <Stack spacing={2} sx={{ width: '450' }} alignItems={"center"}>
                        
                    <TextField id="outlined-basic" label="Username" variant="outlined" sx={{backgroundColor:"#D9D9D9" ,width:400}} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{backgroundColor:"#D9D9D9" ,width:400}} />
                    
                    <a href='' >If you are admin, Click here to log in</a>

                        <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"center"}>
                            <Button variant='contained' sx={{ width: 500 , alignItems:"center", backgroundColor:"#46B7C7"}}>Login</Button>
                        </Stack>
                    </Stack>
                    </Stack>
                    
                    
            </CenterHeaderCard>
                <CardContent>
                    <Stack direction = {'row'} height={150}></Stack> 
                <Divider />
                <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={30}>
                <Typography width={500}>
                    
                 The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle.
                 Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission
                 policy on university admissions.

                </Typography>
                <Typography>
                <List>
                  <ListItem variant="h5" gutterBottom>
                  DEPARTMENTS
                  </ListItem>
                  <ListItem>
                  Civil and Environmental Engineering
                  </ListItem>
                  <ListItem>
                  Electrical and Information Engineering
                  </ListItem>
                  <ListItem>
                  Mechanical and Manufacturing Engineering
                  </ListItem>
                  <ListItem>
                  Interdisciplinary Studies
                  </ListItem>    

                </List>  
                </Typography>
                <Typography>
                    <List>
                    <ListItem variant="h5" gutterBottom>
                    CONTACT US
                    </ListItem>
                    <ListItem>
                    Faculty of Engineering,Hapugala,Galle,Sri Lanka.
                    </ListItem>
                    <ListItem>
                    Phone: +(94)0 91 2245765/6
                    </ListItem>
                    <ListItem>
                    E-mail: webmaster@eng.ruh.ac.lk
                    </ListItem> 
                    </List>  
                 </Typography>

                </Stack>
                </CardContent>
                </CardActionArea>
            </Card>
            
            
      </Box>
      
      
    );
  }


