import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
    const navigate = useNavigate()
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 700,
                    mt: 10
                }}
            >
                Popular Categories
            </Typography>
            <Container
                sx={{
                    marginTop: 3,
                    marginBottom: 3
                }}
            >
                <Grid container spacing={6}>
                    <Grid 
                        sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} 
                            
                        item md={3} sm={6} xs={12}>
                        <Paper className="popularCategories">
                            <Button onClick={() => navigate('/course-list')} sx={{textTransform: 'capitalize', textAlign: 'center', color: 'white', fontSize: 25 }}>
                                Category A
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} item md={3} sm={6} xs={12}>
                        <Paper  className="popularCategories">
                            <Button onClick={() => navigate('/course-list')} sx={{textTransform: 'capitalize', textAlign: 'center', color: 'white', fontSize: 25 }}>
                                Category A
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} item md={3} sm={6} xs={12}>
                        <Paper className="popularCategories">
                            <Button onClick={() => navigate('/course-list')} sx={{textTransform: 'capitalize', textAlign: 'center', color: 'white', fontSize: 25 }}>
                                Category A
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} item md={3} sm={6} xs={12}>
                        <Paper className="popularCategories">
                            <Button onClick={() => navigate('/course-list')} sx={{textTransform: 'capitalize', textAlign: 'center', color: 'white', fontSize: 25 }}>
                                Category A
                            </Button>
                        </Paper>
                    </Grid>  
                </Grid>
            </Container>
            <Container
                align="center"
            >
            <Button
                    variant="contained"
                    sx={{textTransform: 'capitalize'}}
                    onClick={() => navigate('/course-list')}
                >View All Catagories</Button>
            </Container>
        </>
    );
}

export default PopularCategories;