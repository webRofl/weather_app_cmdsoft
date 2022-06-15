import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { weatherAction } from '../../../../store/weather/weather.slice';
import classes from './Unit.module.css';

const Unit: React.FC = () => {
  const dispatch = useDispatch();

  const { setUnit } = weatherAction;

  const handleChangeC = () => dispatch(setUnit('C'));

  const handleChangeF = () => dispatch(setUnit('F'));

  return (
    <FormControl className={classes.unit__wrapper}>
      <RadioGroup defaultValue="celsius" row>
        <FormControlLabel
          value="celsius"
          control={<Radio />}
          label="в Цельсиях"
          onChange={handleChangeC}
        />
        <FormControlLabel
          value="fahrenheit"
          control={<Radio />}
          label="в Фаренгейтах"
          onChange={handleChangeF}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Unit;
