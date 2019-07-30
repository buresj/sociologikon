import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 200,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    fontSize: '10px',
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name, setValue, theme) {
  return {
    fontWeight:
      setValue.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = props => {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(props.selectData);
  

  function handleChange(event) {
    props.changeFunction(event.target.value)
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={value}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={
            selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  < Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          MenuProps={MenuProps}
        >
          {props.menu.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, value, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;