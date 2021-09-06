import { Drawer, createStyles, makeStyles, Theme, IconButton, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IListItem } from '../../../interface/listItem.interface';
import { FENCE_CANVAS_LIGHT_RED, FENCE_CANVAS_RED, FENCE_CANVAS_YELLOW } from '../../../App';

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
    paperPrimary: {
      backgroundColor: FENCE_CANVAS_RED,
    },
    paperSecondary: {
      backgroundColor: FENCE_CANVAS_YELLOW,
      color: `${FENCE_CANVAS_LIGHT_RED} !important`,
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
    textColorLight: {
      color: 'white',
    },
    textColorDark: {
      color: FENCE_CANVAS_LIGHT_RED,
    },
    logo: {
      width: '4rem',
      height: 'auto',
    },
    toggleButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      '&:hover': {
        cursor: 'pointer',
      },
    }
  }),
);

export interface SidebarProps {
    listItems: IListItem[];
    open: boolean;
    onClose: () => void;
    color: 'primary' | 'secondary';
    logoSrc: string | undefined;
}

const Sidebar = ({ listItems, open, onClose, color, logoSrc }: SidebarProps): React.ReactElement => {
    const classes = useStyles();

    const getListItems = (): React.ReactElement[] => {
        return listItems.map((i) => (
            <ListItem button key={i.text}>
                <ListItemIcon className={clsx({
                  [classes.textColorLight]: color === 'primary',
                  [classes.textColorDark]: color === 'secondary',
                })}>{i.icon}</ListItemIcon>
                <ListItemText className={clsx({
                  [classes.textColorLight]: color === 'primary',
                  [classes.textColorDark]: color === 'secondary',
                })} primary={i.text} />
            </ListItem>
        ));
    };

    return (
        <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    [classes.paperPrimary]: color === 'primary',
                    [classes.paperSecondary]: color === 'secondary',
                }),
            }}
        >
            <div className={classes.toolbar}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img src={logoSrc} className={classes.logo} alt='logo' />
              </div>
            </div>
            <div style={{ flexGrow: 1 }}>
                <List>
                {getListItems()}
                </List>
            </div>
            <Box className={classes.toggleButtonContainer} onClick={onClose}>
                <IconButton className={clsx({
                  [classes.textColorLight]: color === 'primary',
                  [classes.textColorDark]: color === 'secondary',
                })}>
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
