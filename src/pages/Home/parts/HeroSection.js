import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import styles from '../Home.module.css'

import { blue } from "@mui/material/colors";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <Container>
                <Grid container>
                    <Grid sx={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontFamily: 'Poppins', fontSize: 50, textTransform: 'uppercase', fontWeight: 700 }}>Welcome to V.EDU's Virtual World</Typography>
                        <Box sx={{
                            display: 'flex',
                            mt: 4
                        }}>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 10,
                                    color: "white"
                                }}
                                onClick={() => navigate('/dashboard')}
                            >Enroll Now</Button>
                            <Button
                                variant="contained"
                                color='secondary'
                                sx={{
                                    ml: 4,
                                    borderRadius: 10
                                }}
                                onClick={() => navigate('/dashboard')}
                            >Start Now</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item md={4} xs={12} sm={6}>
                        <Button
                            sx={{
                                borderRadius: 0
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: 'rgba(0,0,0, 0.5)',
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box sx={{
                                    borderRadius: '50%',
                                    bgcolor: blue[100],
                                    padding: 1.5
                                }}>
                                    <SmartToyIcon sx={{ fontSize: 50 }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                    ml={1}
                                >
                                    <Typography ml={2} mb={1} variant='h5' sx={{ fontWeight: 700, textAlign: 'left' , color: 'white'}}>Virtual Reality Store</Typography>
                                    <Button onClick={() => navigate('/dashboard')} endIcon={<ArrowForwardIcon />} sx={{textTransform: 'capitalize', textAlign: 'left', marginRight: 'auto', marginLeft: '10px'}}>View More</Button>
                                </Box>
                            </Paper>
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12} sm={6}>
                    <Button
                            sx={{
                                borderRadius: 0
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: 'rgba(0,0,0, 0.5)',
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box sx={{
                                    borderRadius: '50%',
                                    bgcolor: blue[100],
                                    padding: 1.5
                                }}>
                                    <SmartToyIcon sx={{ fontSize: 50 }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                    ml={1}
                                >
                                    <Typography ml={2} mb={1} variant='h5' sx={{ fontWeight: 700, textAlign: 'left' , color: 'white'}}>Best Industry Leaders</Typography>
                                    <Button onClick={() => navigate('/instructors')} endIcon={<ArrowForwardIcon />} sx={{textTransform: 'capitalize', textAlign: 'left', marginRight: 'auto', marginLeft: '10px'}}>View More</Button>
                                </Box>
                            </Paper>
                    </Button>
                    </Grid>
                    <Grid item md={4} xs={12} sm={6}>
                    <Button
                            sx={{
                                borderRadius: 0
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: 'rgba(0,0,0, 0.5)',
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box sx={{
                                    borderRadius: '50%',
                                    bgcolor: blue[100],
                                    padding: 1.5
                                }}>
                                    <SmartToyIcon sx={{ fontSize: 50 }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                    ml={1}
                                >
                                    <Typography ml={2} mb={1} variant='h5' sx={{ fontWeight: 700, textAlign: 'left' , color: 'white'}}>View Online Courses</Typography>
                                    <Button onClick={() => navigate('/course-list')} endIcon={<ArrowForwardIcon />} sx={{textTransform: 'capitalize', textAlign: 'left', marginRight: 'auto', marginLeft: '10px'}}>View More</Button>
                                </Box>
                            </Paper>
                    </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
 
export default HeroSection;