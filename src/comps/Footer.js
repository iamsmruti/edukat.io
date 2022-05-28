import { Container, Grid, Paper, Typography, Button, ButtonGroup } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import logo from '../images/2.png'
import '../App.css'

const Footer = () => {
    return (
        <>
        <Container>
            <Grid container spacing={3} sx={{pt: 10}}>
                <Grid sx={{
                    mt: -5
                }} item md={6} xs={12}>
                    <img height={140} src={logo} alt="" />

                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: grey[100],
                            padding: 3,
                        }}
                    >
                        <Typography 
                            variant='body1'
                            sx={{
                                fontSize: 'larger'
                            }}
                        >
                            Tell me & I Forget. Teach me and I Remember. Involve me and I Learn.
                        </Typography>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: grey[100],
                            padding: 3,
                            mt: 3,
                            mb: 10
                        }}
                    >
                        <Typography 
                            variant='body1'
                            sx={{
                                fontSize: 'larger'
                            }}
                        >
                            +91 9860177421
                        </Typography>
                        <Typography 
                            variant='body1'
                            sx={{
                                fontSize: 'larger'
                            }}
                        >
                            eduflares@gmail.com
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                        <Typography 
                            variant='h6'
                            sx={{
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Quick Links
                        </Typography>
                        <ButtonGroup sx={{flexDirection: 'column', alignItems: 'flex-start'}} variant="link">
                            <Button>Home</Button>
                            <Button>Blog Posts</Button>
                            <Button>About Us</Button>
                            <Button>Contact Us</Button>
                        </ButtonGroup>
                        
                </Grid>
                <Grid item xs={12} md={2}>
                <Typography 
                            variant='h6'
                            sx={{
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Quick Links
                        </Typography>
                        <ButtonGroup sx={{flexDirection: 'column', alignItems: 'flex-start'}} variant="link">
                            <Button>Home</Button>
                            <Button>Blog Posts</Button>
                            <Button>About Us</Button>
                            <Button>Contact Us</Button>
                        </ButtonGroup>
                </Grid>
                <Grid item xs={12} md={2}>
                <Typography 
                            variant='h6'
                            sx={{
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Quick Links
                        </Typography>
                        <ButtonGroup sx={{flexDirection: 'column', alignItems: 'flex-start'}} variant="link">
                            <Button>Home</Button>
                            <Button>Blog Posts</Button>
                            <Button>About Us</Button>
                            <Button>Contact Us</Button>
                        </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
        <div className={'copyrightBlock'}>
            <Container
                sx={{
                    lineHeight: '50px',
                    textAlign: 'right',
                    color: 'white',
                    height: 50
                }}
            >
                All rights reserved. By V.EDU'S
            </Container>
        </div>
        </>
    );
}
 
export default Footer;