import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: 999,
        boxShadow: 'none',
        //backgroundColor: theme.palette.background.dark,
    },
    iconButton: {
        paddingRight: theme.spacing(2),
    },
    leaveButton: {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
        marginLeft: theme.spacing(2),
    }

}));


function TopBar({ open, onOpenChange }) {
    const classes = useStyles();
    return (
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => onOpenChange(!open)}>
                    <MenuIcon />
                </IconButton>
                <a href="/">[LOGO]</a>
                <div className={classes.grow}></div>

                <IconButton color="inherit" className={classes.iconButton}>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit" className={classes.iconButton}>
                    <Badge badgeContent={10} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Button variant="outlined" className={classes.leaveButton} startIcon={<ExitToAppIcon />}>Sair</Button>
            </Toolbar>
        </AppBar>
    );

}

export default TopBar;