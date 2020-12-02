
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProjectStatus from './ProjectStatus/ProjectStatus';
import GraphStatus from './GraphStatus/GraphStatus';
import { BsSearch } from 'react-icons/bs';
import { GiButterfly } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: "100%",
        },
        zIndex: 1400,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        position: "absolute",
        right: 0
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflow: "hidden",
        backgroundColor: "#EAF0F1"
    },
    topbarContainer: {
        justifyContent: "space-between",
        display: "flex"
    },
    upgradeBtn: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#EA425C"
    }

}));



function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [searchBarVisible, setSearchBarVisible] = useState(false)


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //is mobile screen or large screen
    const matches = useMediaQuery('(min-width:600px)');


    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div className={classes.root}>
            <CssBaseline />
            {!searchBarVisible ?
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <GiButterfly color="#FFFFFF" size={40} />
                            <div>MATERIAL</div>
                            <div>PRO</div>
                            <div style={{ marginLeft: 20 }} onClick={() => setSearchBarVisible(true)}>
                                <BsSearch color="#FFFFFF" size={20} />
                            </div>

                            {matches &&
                                <div style={{ position: "absolute", right: 20 }}>
                                    <span className={classes.upgradeBtn}>Upgrade</span>
                                    <img style={{ height: 30, width: 30, borderRadius: 15, marginLeft: 20 }} alt="profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                            }
                        </div>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                :
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ backgroundColor: "#FFFFFF" }}>
                        <input style={{ outline: "none", border: "none", width: "100%" }} type="text" placeholder="Search here..." />
                        <ImCross color="#000" style={{ position: "absolute", right: 20 }} size={20} onClick={() => setSearchBarVisible(false)} />
                    </Toolbar>
                </AppBar>
            }


            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <GraphStatus />
                <ProjectStatus />


            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;