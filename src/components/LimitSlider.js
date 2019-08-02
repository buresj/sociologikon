import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import 'typeface-roboto';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const RangeSlider = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(props.limit);

  const handleChange = (event, newValue) => {
    props.changeLimit(newValue);
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Nejvýše prací: {props.limit}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
}
export default RangeSlider;