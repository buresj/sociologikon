import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const RangeSlider = (props) => {
    
  const classes = useStyles();
  const [value, setValue] = React.useState(props.yearRange);

  const handleChange = (event, newValue) => {
    props.changeYear(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Rok obhajoby: {value[0]} - {value[1]}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        marks
        min={2010}
        max={2019}
      />
    </div>
  );
}
export default RangeSlider;