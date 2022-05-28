import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import asset1 from '../images/asset1.jpg'
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ post }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{display: 'flex', mb: 2}}>
            <CardMedia
                component="img"
                height="180"
                image={asset1}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                    {post.title}
                </Typography>
                <Typography sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                }} variant="body2" color="text.secondary">
                    {post.description}
                </Typography>

                <Button onClick={() => navigate('/blog-posts/' + post.slug)} endIcon={<ArrowForwardIcon />} sx={{textTransform: 'capitalize', mt: 2}}>Continue Reading</Button>
            </CardContent>
        </Card>
    );
}

export default BlogPost