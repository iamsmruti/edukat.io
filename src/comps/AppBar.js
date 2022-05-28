// Material UI Components
import { 
    SwipeableDrawer, 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Box, 
    IconButton, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemButton 
} from "@mui/material";

// Material Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

// React Components
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// Custom Components
import Dropdown from "./Dropdown";
import logo from '../images/2.png'

const menuItems = [
    {
        text: 'Home',
        path: '/'
    },
    {
        text: 'Course List',
        path: '/course-list'
    },
    {
        text: 'Registration',
        path: '#'
    },
    {
        text: 'More',
        path: '#'
    }
]

const RegistrationItems = [
    {
        title: "Student Reg",
        path: '/student-registration'
    },
    {
        title: "Intstructor Reg",
        path: '/instructor-registration'
    }
]

const MoreItems = [
    {
        title: "Instructors",
        path: '/instructors'
    },
    {
        title: "About Us",
        path: '/about-us'
    },
    {
        title: "Blog Posts",
        path: '/blog-posts'
    },
    {
        title: "Contact Us",
        path: '/contact-us'
    },
    {
        title: "Terms of Use",
        path: '/terms-of-use'
    }
]

const Appbar = ({ cartItems }) => {
    const navigate = useNavigate()
    const [state, setState] = useState(false)

    const drawer = (
        <Box
            className="sideMenu"
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setState(true)}
            onKeyDown={() => setState(false)}
        >
            <List>
                {menuItems.map((item) => (
                    item.path === '#' ?
                        (
                            item.text === 'More' ? <Dropdown text={item.text} items={MoreItems} /> : <Dropdown text={item.text} items={RegistrationItems} />
                        ) : (
                            <ListItem key={item} disablePadding>
                                <ListItemButton
                                    onClick={() => navigate(item.path)}
                                >
                                    <ListItemText sx={{ ml: 2 }} primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        )
                ))}
            </List>
        </Box>
    )

    return (
        <div>
            <AppBar>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setState(true)}>
                        <MenuIcon />
                    </IconButton>

                    <img height={80} src={logo} alt="" />

                    <Box
                        sx={{
                            marginLeft: 3,
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {menuItems.map((page) => (
                            page.path === '#' ?
                                (
                                    page.text === 'More' ? <Dropdown text={page.text} items={MoreItems} /> : <Dropdown text={page.text} items={RegistrationItems} />
                                ) :
                                (<Button
                                    key={page.text}
                                    onClick={() => navigate(page.path)}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        marginRight: 1,
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {page.text}
                                </Button>)
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            onClick={() => navigate('/cart')}
                            sx={{
                                mr: 1
                            }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                mr: 3
                            }}
                        >
                            ({cartItems.length})
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate('/dashboard')}
                            sx={{
                                my: 2,
                                bgcolor: '#532957',
                                color: 'white',
                                display: 'block',
                                marginLeft: 'auto'
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                variant="temporary"
                open={state}
                onClose={() => setState(false)}
            >
                {drawer}
            </SwipeableDrawer>
        </div>
    );
}

export default Appbar;