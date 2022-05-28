import { Container, Grid, Paper, Typography } from '@mui/material';
import Banner from '../../comps/Banner'
import ContactForm from '../../comps/ContactForm';
const Contact = () => {
    return (
        <div>
            <Banner heading={'Contact'}/>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sx={12} md={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item sx={12} md={6}>
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
                                Call us
                            </Typography>
                            <Typography mt={2} variant='body1'>+91 7894718923</Typography>

                            <Typography
                                mt={5}
                                variant="h4"
                                sx={{
                                    fontWeight: 700
                                }}
                            >
                                Email Us
                            </Typography>
                            <Typography mt={2} variant='body1'>smrutiranjanbadatya2@gmail.com</Typography>
                            <Typography mt={0.6} variant='body1'>smrutiranjanbadatya2@gmail.com</Typography>

                            <Typography
                                mt={5}
                                variant="h4"
                                sx={{
                                    fontWeight: 700
                                }}
                            >
                                Visit Us
                            </Typography>
                            <Typography mt={2} variant='body1'>New Street 1st lane, Jeypore</Typography>
                            <Typography mt={0.6} variant='body1'>Pin - 764001</Typography>
                            <Typography mt={0.6} variant='body1'>Koraput, Odisha</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
 
export default Contact;