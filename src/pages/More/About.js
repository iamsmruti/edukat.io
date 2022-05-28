import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Banner from '../../comps/Banner'
import FeatureCard from '../../comps/FeatureCard';
import asset3 from '../../images/asset3.webp'

import InstructorCard from '../../comps/InstructorCard';

const About = ({instructors}) => {
    return (
        <>
            <Banner heading={'Our Story'}/>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={6} sx={12}>
                        <img width={'100%'} src={asset3} alt="" />
                    </Grid>
                    <Grid item md={6} sx={12}>
                        <Typography variant='h4' sx={{fontWeight: 700}}>Background</Typography>
                        <Typography mt={2} variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Typography>

                        <Typography mt={5} variant='h4' sx={{fontWeight: 700}}>Mission & Vision</Typography>
                        <Typography mt={2} variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
                    </Grid>
                </Grid>

                <Typography align='center' mt={20} variant='h4' sx={{fontWeight: 700}}>Things that Make us proud</Typography>
                <Typography align='center' mt={2} variant='body1'>The Features of our Methodology</Typography>

                <Grid mt={4} container spacing={5}>
                    <Grid item xs={12} md={6}><FeatureCard /></Grid>
                    <Grid item xs={12} md={6}><FeatureCard /> </Grid>
                    <Grid item xs={12} md={6}><FeatureCard /> </Grid>
                    <Grid item xs={12} md={6}><FeatureCard /> </Grid>
                </Grid>

                <Typography align='center' mt={20} mb={6} variant='h4' sx={{fontWeight: 700}}>Our Team</Typography>
                <Grid container spacing={3}>
                    {instructors.map((instructor) => (
                        <Grid item xs={6} sm={4} md={3}>
                            <InstructorCard instructor={instructor} key={instructor.name} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
 
export default About;