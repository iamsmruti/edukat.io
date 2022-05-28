import { Paper } from "@mui/material";
import { Container, TextField, Typography, Box, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const Dashboard = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container
            sx={{
                height: 600,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Paper
                sx={{
                    width: 500,
                    height: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 4
                }}
            >
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 4
                        }}
                    >Hi, Welcome Back!</Typography>
                    <TextField sx={{ mb: 2 }} label="Username or Email" variant="outlined" fullWidth onChange={(e) => setUsername(e.target.value)}/>
                    <TextField sx={{ mb: 2 }} label="Password" variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)}/>

                    <Box
                        sx={{
                            display: 'flex', 
                            justifyContent: "space-between"
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
                        </FormGroup>

                        <Button
                            sx={{
                                textTransform: 'capitalize'
                            }}
                            onClick={() => navigate('/retrieve-password')}
                        >
                            Forgot
                        </Button>
                    </Box>

                    <Button
                        type='submit'
                        variant="contained"
                        sx={{
                            mt: 2,
                            mb: 2
                        }}
                        fullWidth
                    >
                        Sign In
                    </Button>
                </form>

                <Box
                    sx={{
                        display: 'flex', 
                        justifyContent: "space-between"
                    }}
                >
                    <Typography>Dont have an account ?</Typography>
                    <Button
                        sx={{
                            textTransform: 'capitalize'
                        }}
                        onClick={() => navigate('/student-registration')}
                    >
                        Register Now
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Dashboard;