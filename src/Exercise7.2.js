import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { pink, purple, teal } from '@material-ui/core/colors';






function Ap() {
    const [mouseX, setMouseX] = React.useState(null);
	const [mouseY, setMouseY] = React.useState(null);
    const [font, setFont] = React.useState('Segoe UI');
    const [color, setColor] = React.useState("pink");

    const swapColors = () => {
    
    if (color === "pink") {
           setColor("Green") 
    } else {
        if (color !== "pink" && "Green")
            setColor("black")
        setColor("blue")
        } 
	}

const handleClick = (event) => {
		event.preventDefault();
		setMouseX(event.clientX);
		setMouseY(event.clientY);
	};
	
	const handleClose = () => {
		setMouseX(null);
		setMouseY(null);
	};

    const adjustFont = (change) => {
        if (font === '-apple-system') {
            setFont('sans-serif');
        } else {
            if (font !=='Arial')
                 setFont('Segoe UI Emoji');
        }
    }


    return (
        <Paper border={1} variant="outlined" display="flex"
            justifyContent="center"
            
            style={{
                backgroundColor: 'white', width: 500,
                marginLeft: 400, marginTop: 50,
                padding: 50, textAlign: 'center',
                
            }} bgcolor="background.paper">
            <h3> App to change text font and color(type inside box and right click to change the text and color)
            </h3>
            	
            <Menu
                keepMounted
                open={mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                        (mouseY !== null && mouseX !== null) ? 
                        { top: mouseY, left: mouseX } : undefined
                    }
                 
                >
                <MenuItem onClick={(evt) => {adjustFont(); handleClose(evt);}}>Increase text size</MenuItem>
                <MenuItem onClick={(evt) => {swapColors(); handleClose(evt);}}>Swap colors</MenuItem>
          
            </Menu>
            <Box  onContextMenu={handleClick} style={{ cursor: 'context-menu' }} >
            <TextField
            variant="outlined"    
              fullWidth
               inputProps={{style:{color:color,fontSize:40, fontFamily:font}}}
                id="filled-text"
               onContextMenu={handleClick}
                style={{ cursor: 'context-menu' }}
               />
           </Box>
            

        </Paper>
        
	);
}

export default Ap;
