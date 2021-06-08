import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PieChart from './PieChart';
import { Slider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { teal } from '@material-ui/core/colors';


const useStyles = makeStyles({
  buttons: {
    margin: '8pt',
  },
  contents: {
    margin: '8pt',
  },
});
function App() {
	
    const [numberStatistics, setNumberStatistics] = React.useState({});
    const [name, setName] = React.useState("");
    const [data, setData] = React.useState('0');

	const classes = useStyles();
	
    const addStaff = (event) => {
        let Department = {};
        Department[data] = { value: data, name: name };
        Department[data].data = data;
        for (let data in numberStatistics) {
            Department[data] = {
                value: 1,
                name: numberStatistics[data].name
            };
        }
        setNumberStatistics(Department);
    }


        const updateName = (event) => {
            setName(event.target.value)
        }

        const updateData = (event, newData) => {
            setData(newData)
        }
const marks = [
  {
        value: 0,
      label: '0',
  },
  {
      value: 10,
      label: '10',
  },
  {
      value: 20,
      label: '20',
  },
  {
      value: 30,
      label: '30',
    },
  {
      value: 40,
      label: '40',
    },
  {
      value: 50,
      label: '50',
    },
];
    
    return (
        <Paper border={1} variant="outlined" display="flex" justifyContent="center" style={{ backgroundColor: 'white', width: 520, marginLeft: 400, marginTop: 50, padding: 40, textAlign: 'center' }} >
            <h3>Program to draw Piechart</h3>
            <Box bgcolor="blue" border={2} borderRadius={16}>
                
                <Box justifyContent="center" borderRadius={16} border={2} bgcolor="white" className={classes.contents}>
                      
                    <Typography>Pie Chart Application</Typography>
                    <Paper border={1} variant="outlined" justifyContent="center" >
                        <PieChart  data={numberStatistics} />
                        </Paper>
                </Box>
                
                <Box border={2} bgcolor={teal[300]} borderRadius={16}>
                     <div><Typography className={classes.contents}>Value</Typography></div>
                    <Slider
                       
                        style={{"margin":10, "width":200, "height":2}}
                       marks={marks}
                value={data}
                valueLabelDisplay="on"
                step={1}
                min={0}
                max={50}
                onChange={updateData}
                />
			<Typography className={classes.contents}>Name</Typography>
			 <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={updateName}
                        placeholder="Submit the Name"
                        id="filled-number"
                        style={{"marginBottom":30}}
                        InputLabelProps={{
                        shrink: true,
                         }}/>
            
			</Box>
			<Button 
				className={classes.buttons}
				variant="contained" 
				color="primary" 
				onClick={addStaff}>
					Submit
			</Button>
			
			
            </Box>
            </Paper>
	);
}

export default App;
