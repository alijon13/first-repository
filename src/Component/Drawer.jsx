import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Switcher from '../Component/Switcher';





export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            <div className="flex justify-center py-[20px]">
            <Switcher/>
            </div>
            <div className="">
              <ul className='flex gap-[30px] justify-center flex-wrap'>
                <li>Home</li>
                <li>About</li>
                <li>Tech Start</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
              <div className="flex justify-center pt-[30px] gap-[20px]">
                <img src="src/assets/Vector (1).svg" alt="" />
                <img src="src/assets/ant-design_twitter-circle-filled.svg" alt="" />
                <img src="src/assets/entypo-social_linkedin-with-circle.svg" alt="" />
              </div>
            </div>
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: "black", background: "white", borderRadius: "5px", width: "35px", height: "35px" }} /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}