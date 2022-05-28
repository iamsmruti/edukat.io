import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Translate } from '@mui/icons-material';

export default function Notif() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className='notif'>
            <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </IconButton>
            <Popover
                sx={{
                    mt: -10, width: 300
                }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.
                The content of the Popover.The content of the Popover.The content of the Popover.The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}
