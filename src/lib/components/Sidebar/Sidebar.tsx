import { Drawer, createStyles, makeStyles, Theme, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IListItem } from '../../../interface/listItem.interface';
import { FENCE_CANVAS_RED } from '../../../App';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
        backgroundColor: FENCE_CANVAS_RED,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export interface SidebarProps {
    listItems: IListItem[];
    open: boolean;
    onClose: () => void;
    color: 'primary' | 'secondary';
}

const Sidebar = ({ listItems, open, onClose, color }: SidebarProps): React.ReactElement => {
    const classes = useStyles();

    const getListItems = (): React.ReactElement[] => {
        return listItems.map((i) => (
            <ListItem button key={i.text}>
                <ListItemIcon style={{ color: 'white' }}>{i.icon}</ListItemIcon>
                <ListItemText style={{ color: 'white' }} primary={i.text} />
            </ListItem>
        ));
    };

    return (
        <Drawer
            variant='permanent'
            color={color}
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
            classes={{
                paper: clsx(classes.paper, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <Typography style={{ color: 'white' }}>
                    LOGO
                </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
                <List>
                {getListItems()}
                </List>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <IconButton style={{ color: 'white' }} onClick={onClose}>
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
        </Drawer>
    );
};

export default Sidebar;
