import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import HeroSection from "./parts/HeroSection";
import asset3 from '../../images/asset3.webp'
import Caraousal from "../../comps/Caraousel";

import PopularCategories from "./parts/PopularCategories";
import Stats from "./parts/Stats";

const Home = ({courses, handleAddItem, cartItems}) => {
    return (
        <>
            <HeroSection />
            <Box
                sx={{
                    bgcolor: grey[100]
                }}
            >
                <Container
                    sx={{
                        height: 250
                    }}
                >
                    <Grid height={250} container>
                        <Grid 
                            md={8} xs={12}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        item>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Featured Courses</Typography>
                                <Typography sx={{ maaxWidth: 500 }} variant="body1">Tell me & I Forget. Teach me and I Remember. Involve me and I Learn.
                                    Learning often happens in Classroom but it doesn’t have to.</Typography>
                            </Box>
                        </Grid>
                        <Grid 
                            md={4} xs={12}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        item>
                            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>Browse Courses</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Caraousal handleAddItem={handleAddItem} cartItems={cartItems} courses={courses} />
            <Caraousal handleAddItem={handleAddItem} cartItems={cartItems} courses={courses} />
            <Caraousal handleAddItem={handleAddItem} cartItems={cartItems} courses={courses} />

            <PopularCategories />
            <Stats />
            <Box
                sx={{
                    bgcolor: grey[100],
                    paddingBottom: 4,
                    paddingTop: 4
                }}
            >
                <Container
                >
                    <Typography
                        align="center"
                        variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}
                    >What is V.EDU's</Typography>

                    <Grid
                        spacing={4}
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >   
                        <Grid p={2} item md={6} xs ={12}>
                            <Typography mb={3} variant="h5" width={'100%'}>V.EDU'S works on virtual reality (VR) and Metaverse concepts. It shall be a great achievement if we shift our traditional education system to virtual reality-based education.</Typography>
                        </Grid>
                        <Grid item md={6} xs ={12}>
                            <img width={'100%'} src={asset3} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;