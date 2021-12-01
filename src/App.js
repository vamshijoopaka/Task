import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Drawer from './components/Drawer';
import React from 'react';
import vehicleResponse from './constants/vehicle-response.json';
import homeMortgageResponse from './constants/home-mortgage-response.json';
import { makeStyles } from '@mui/styles';
import Chart from './components/Chart';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const useStyle = makeStyles({
  container: {
    display: 'flex',
    height: '100%',
    '& > div:first-child': {
      marginRight: 16,
    },
    '& > div': {
      flex: 1
    }
  }
})
function App() {
  const classes = useStyle();
  const [state, setState] = React.useState({
    pieSeries: [],
    barSeries: [],
    barCategories: [],
    loading: false,
  });
  React.useEffect(() => {

    setState(prev => ({ ...prev, loading: true }));

    setTimeout(() => {
      const pieSeries = [{
        name: "Total",
        colorByPoint: true,
        data: Array.isArray(vehicleResponse.data) ?
          vehicleResponse.data.map(ele => ({
            name: ele.VehicleType || "Others",
            y: +ele.total || 0
          }))
          : [],
      }];;
      const barCategories = [];
      const barSeries = [{
        name: "Count Case ID",
        data: Array.isArray(homeMortgageResponse.data) ?
          homeMortgageResponse.data.map(ele => (barCategories.push(ele.pyStatusWork), +ele.total || 0))
          : [],
      }]
      setState(prev => ({
        ...prev,
        pieSeries,
        barSeries,
        barCategories,
        loading: false,
      }));

    }, 1e3);
    
  }, []);
  return (
    <div className="App">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Drawer>
        <Box className={classes.container}>
          <Paper>
            <Chart
              series={state.pieSeries}
              title='Vehicle Type'
              type="pie"
            />
          </Paper>
          <Paper style={{ flex: 1 }}>
            <Chart
              series={state.barSeries}
              categories={state.barCategories}
              xAxisTitle="Work Status"
              yAxisTitle="Count Case ID"
              title='Home Mortgagues By Work Status'
              type="column"
            />
          </Paper>
        </Box>
      </Drawer>
    </div>
  );
}

export default App;
