import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Divider } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import courseIcon from '../images/asset1.jpg'
import PersonIcon from '@mui/icons-material/Person';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const CourseCard = ({course, handleAddItem, cartItems}) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="140"
        image={courseIcon}
        alt="green iguana"
      />
      <CardContent>
          <Box>
            <StarBorderIcon sx={{color: 'orange'}}/>
            <StarBorderIcon sx={{color: 'orange'}}/>
            <StarBorderIcon sx={{color: 'orange'}}/>
            <StarBorderIcon sx={{color: 'orange'}}/>
            <StarBorderIcon sx={{color: 'orange'}}/>
          </Box>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <Typography 
                    sx={{display: 'flex', fontSize: 'smaller', alignItems: 'center'}}
                >
                    <PersonIcon sx={{mr: 1}}/>
                    {course.enrolled}
                </Typography>
            </div>
            <div>
                <Typography 
                    sx={{display: 'flex', fontSize: 'smaller', alignItems: 'center'}}
                >
                    <QueryBuilderIcon sx={{mr: 1}}/>
                    {course.estimated_time} hr
                </Typography>
            </div>
        </Box>

        <Box
            sx={{
                display: 'flex',
                mt: 5,
                mb: 1,
                alignItems: 'center'
            }}
        >
            <Avatar
                sx={{
                    
                }}
            ></Avatar>
            <Typography sx={{ml: 2}}> By <a href="#">{course.author}</a></Typography>
        </Box>
      </CardContent>
      <Divider/>
      <CardActions 
            sx={{
            p: 2      
            }}>
        <Typography sx={{ }}>₹ {course.pricing}</Typography>
        <Button  
          onClick={() => !(cartItems.find((item) => item.id === course.id)) ? handleAddItem(course) : null}
          startIcon={<AddShoppingCartIcon />}
        variant='outlined' sx={{ml: 'auto'}} size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard