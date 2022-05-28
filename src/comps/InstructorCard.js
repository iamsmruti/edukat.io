import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import profileImg from '../images/asset2.jpg'

const InstructorCard = ({instructor}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={profileImg}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {instructor.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {instructor.designation}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InstructorCard;