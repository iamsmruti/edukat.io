import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from 'react'

const ContactForm = () => {
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDetail()
    }
    return (
        <Paper
            sx={{
                p: 3
            }}
            elevation={0}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700
                }}
            >
                We are always open to hear you !
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField sx={{mt: 3}} variant="outlined" label='First Name' required fullWidth onChange={(e) => setFirstname(e.target.value)}/>
                <TextField sx={{mt: 3}} variant="outlined" label='Email' required fullWidth onChange={(e) => setEmail(e.target.value)}/>
                <TextField sx={{mt: 3}} variant="outlined" label='Phone Number' required fullWidth onChange={(e) => setPhone(e.target.value)}/>
                <TextField minRows={3} multiline={true} sx={{mt: 3}} variant="outlined" label='Message' required fullWidth onChange={(e) => setMessage(e.target.value)}/>

                <Button 
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2, mb: 1
                    }}
                >Submit</Button>
            </form>
        </Paper>
    );
}
 
export default ContactForm;