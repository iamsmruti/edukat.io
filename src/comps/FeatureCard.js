import {Grid, Paper, Typography} from '@mui/material'
import { blue, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const FeatureCard = () => {
    return (
        <>
        <Paper
            elevation={0}
            sx={{
                bgcolor: grey[100],
                p: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={{
                borderRadius: '50%',
                bgcolor: blue[100], 
                padding: 2
            }}>
                <SmartToyIcon sx={{fontSize: 50}}/>
            </Box>
            <Box>
                <Typography ml={3} mb={1} variant='h5' sx={{fontWeight: 700}}>Lorem Ipsum</Typography>
                <Typography ml={3} variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            </Box>
        </Paper>
        </>
    );
}
 
export default FeatureCard;