import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, Divider, List, ListItem, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { CenterHeaderCard } from "../Components/CenterHeaderCard";
import { useState } from "react";
import axios from "axios";

import LoginTopbar from "../Components/LoginTopbar";

export default function LoginPage () {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
        
		setData({ ...data, [input.name]: input.value });
	};
    const handleSubmit = async (e) => {
        alert("rt");
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
            alert("success");
		} catch (error) {
            alert("error");
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <LoginTopbar/>      
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />       
            <Toolbar />
            <Box sx={{ flexGrow: 1,maxWidth: 2000, height: 850}} >
           
           <Card sx={{ maxWidth: 2000, height: 850}} >
           <CardActionArea >
          
              <CenterHeaderCard title={"Appointment Management System"} >
                  <Stack sx={{backgroundColor:"#C5ECF1" }} direction = {'row'} height={300} width={500} alignItems={"center"} >
                  <Stack spacing={2} sx={{ width: '450' }} alignItems={"center"} >
                      
                  <TextField
                      type="email"
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      required
                      //className={styles.input}
                  />
                  <TextField
                      type="password"
                      label="Password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      required
                      //className={styles.input}
                  />

                  {error && <div>{error}</div>}

                  <a href='' >If you are admin, Click here to log in</a>

                      <Stack spacing={2} direction="row" sx={{ width: '450' }} alignItems={"center"}>
                          <Button type="submit" variant='contained' onClick={handleSubmit} sx={{ width: 500 , alignItems:"center", backgroundColor:"#46B7C7"}}>Login</Button>
                          <a href ="/homestudent" ><Button variant='contained' sx={{ width: '100%' }}>NEST</Button></a> 
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

          </Box>
        </Box>
        </Box>
    );
  }


