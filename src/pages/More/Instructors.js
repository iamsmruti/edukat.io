import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Banner from '../../comps/Banner';
import InstructorCard from '../../comps/InstructorCard';

const Instructors = ({instructors}) => {
    return (
        <>
            <Banner heading='Meet The Instructors' check={true}/>
            <Container
                sx={{
                    mt: 6
                }}
            >
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

export default Instructors;