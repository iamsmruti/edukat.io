import { Container, TextField, Typography, Button } from "@mui/material";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const StudentReg = () => {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <Container
            sx={{
                mt: 6
            }}
        >
            <Typography
                variant="h5"
                sx={{mb:1}}
            >
                Register as a Student
            </Typography>
            <form noValidate autoComplete='off' action="" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setFirstname(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="First Name"
                    color='secondary'
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setLastname(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="Last Name"
                    color='secondary'
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="Username"
                    color='secondary'
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="Email"
                    color='secondary'
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="Password"
                    color='secondary'
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setConfirmPass(e.target.value)}
                    sx={{
                        marginTop: 2,
                        marginBottom: 3,
                        display: 'block'
                    }}
                    variant='outlined'
                    label="Confirm Password"
                    color='secondary'
                    fullWidth
                    required
                />

                <Button
                    variant='contained'
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            <Button 
                sx={{
                    mt: 3
                }}
                onClick={() => navigate('/instructor-registration')}
            >
                Register as Instructor
            </Button>
        </Container>
    );
}
 
export default StudentReg;