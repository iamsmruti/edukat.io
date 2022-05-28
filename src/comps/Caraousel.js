import { Container, Grid, Typography } from '@mui/material';
import CourseCard from './CourseCard';

const Caraousal = ({courses, handleAddItem, cartItems}) => {
    return (
        <>
            <Container>
            <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 700,
                        mt: 6
                    }}
                >Category A Courses</Typography>
            </Container>
            <Container
                sx={{
                    overflow: 'scroll',
                    mt: 1
                }}
            >   
                <Grid display={'flex'} sx={{
                    flexWrap: 'nowrap'
                }} container>
                {courses.map((course) => 
                    <Grid m={3} minWidth={280} item md={3} sm={2} xs={1}><CourseCard cartItems={cartItems} handleAddItem={handleAddItem} course={course} /></Grid>
                )}
                </Grid>
                
            </Container>
        </>
    );
}
 
export default Caraousal;