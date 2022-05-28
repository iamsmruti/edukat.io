import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from 'react'

const RetrievePass = () => {
    const [email, setEmail] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: 300,
                mt: 4
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: 600,
                    p: 4
                }}
            >
                <Typography>Enter your Registered Email below. An Email will be sent , containing a password reset link. </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{ mt: 2, mb: 2 }} variant="outlined" label='Registered Email' fullWidth onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <Button type='submit' variant="contained">Send Link</Button>
                </form>
            </Paper>
        </Container>
    );
}

export default RetrievePass;