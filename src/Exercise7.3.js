import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
  buttons: {
    margin: '8pt',
  },
  contents: {
    margin: '8pt',
    },
    root: {
        marginBlockEnd: 10,
        width:'50%',
      height:'200px',
      border: '2px dotted blue',
      overflowX: 'auto',
        marginLeft:120
    },
    
});

function A() {
  const [result, setResult] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [finderStarted, setFinderStarted] = React.useState(false);
  const [finder, setFinder] = React.useState(null);
  
  const updateText1 = (event) => {
    setFinderStarted(event.target.value);
  }
  
  const updateText2 = (event) => {
    setFinder(event.target.value);
  }

  const classes = useStyles();
	
  const findPrimes = (event) => {
    let fndr = new Worker('primesFinder.js');
    setResults([])
    // send message to the worker
    fndr.postMessage({ startFrom: Number(finderStarted) > 0 ? Number(finderStarted) : 1 });
        
    // receive results from the worker
    //postMessage({"primes": primes.slice(10,100)});
    fndr.onmessage = function (message) {
      if (message.data.prime) {
        if (message.data.prime > Number(finder))
          fndr.postMessage({ stop: true })
      
    
                
			}
            if (message.data.primes) {
                message.data.primes.pop()
				setResults(message.data.primes);
				
			}
		}
	}

    return (
        <Paper border={1} variant="outlined"  display="flex" justifyContent="center" style={{backgroundColor: 'green', width: 500, marginLeft: 400, marginTop: 50, padding: 50, textAlign: 'center'}} bgcolor="background.paper">
          <h3>App for prime finder</h3>
        <Box>
			<Button
				className={classes.buttons}
				variant="contained" 
				disabled={!finderStarted||!finder} 
                    color="primary"
                    onClick={findPrimes}>
          Find
			</Button>
		  </Box>
<Paper className={classes.root} > 
        <List >
              <ListItem >
              <ListItemText >{results.map(results =>
                <h3>{results}</h3>)}</ListItemText>
              </ListItem>
    </List>
        </Paper>
        <Box style={{backgroundColor: 'white',  padding: 50, textAlign: 'center'}} >
            <TextField
                        label="Prime Number From"
            variant="outlined"
                        value={finderStarted}
                        onChange={updateText1}
                        placeholder="Prime Number Start"
                        id="filled-number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                         }}
                        />
            
            <TextField
                        label="Prime Number To"
                        variant="outlined"
                        value={finder}
                        onChange={updateText2}
                        placeholder="Prime Number End"
                        id="filled-number"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                         }}
          />
          </Box>
        </Paper>
        
	);
}

export default A;
