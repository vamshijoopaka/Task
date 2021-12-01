import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import { Explore, Add, Home, Mood, Person, TravelExplore, AccessTime } from '@mui/icons-material';
import {
    Drawer,
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from '../boilerplate';
export default function MiniDrawer(props) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={open}
                onMouseEnter={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Explore />
                        </ListItemIcon>
                        <ListItemText primary={"Compass"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        {
                            open ?
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                : <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                        }
                    </ListItem>
                </List>
                <Divider />
                <Box className="drawerIconContainer">
                    <List>
                        {[
                            [Add, "Create"],
                            [Home, "Home"],
                            [TravelExplore, "Explore"],
                            [Mood, "Things I Like"],
                        ].map(([Component, text]) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <Component />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        <Divider />
                        {[
                            [AccessTime, "Recents"],
                            [Person, "Vamshi Joopaka"],
                        ].map(([Component, text]) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <Component />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, height: "100vh", backgroundColor: "#3333440f" }}>
                {props.children}
            </Box>
        </Box>
    );
}
