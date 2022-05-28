import { Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import '../App.css'

const Banner = ({heading, check}) => {
    return (
        <div className="banner">
            <Paper 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    padding: 3
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        m: 2,
                        color: 'white'
                    }}
                >
                    {heading}
                </Typography>
                {check ? <Typography
                    variant="body1"
                    sx={{
                        maxWidth: 450,
                        textAlign: 'center',
                        mb: 2,
                        color: grey[300]
                    }}
                >
                    Make learning and teaching more effective with active participation and student collaboration
                </Typography> : null}
            </Paper>
        </div>
    );
}
 
export default Banner;