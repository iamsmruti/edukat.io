import Typography from '@mui/material/Typography';
import asset1 from '../images/asset1.jpg'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const CartCard = ({item, handleRemoveItem}) => {
    const navigate = useNavigate()
    return (
        <Grid container>
            <Grid height={'auto'} item md={5} xs={12}>
                <img width={'100%'} src={asset1} alt="" />
            </Grid>
            <Grid 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2
                }}
            item md={7} xs={12}>
                <Typography
                    variant='h5'
                >
                    {item.title}
                </Typography>

                <Box>
                    <Button
                        variant='outlined'
                        startIcon={<ClearIcon />}
                        onClick={() => handleRemoveItem(item)}
                    >
                        Remove
                    </Button>
                    <Typography
                        variant='body1'
                        sx={{
                            fontSize: 20,
                            marginTop: 2,
                            marginLeft: 2
                        }}
                    >
                         Rs. {item.pricing}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default CartCard;