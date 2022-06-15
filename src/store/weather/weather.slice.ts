import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharData, IWeatherInfo, IWeatherState } from './weather.type';

const initialState: IWeatherState = {
  data: [],
  chartData: [],
  unit: 'C',
};

export const weatherSlice = createSlice({
  name: 'slice/weather',
  initialState,
  reducers: {
    setWeatherData: (
      state: IWeatherState,
      action: PayloadAction<IWeatherInfo[]>
    ) => {
      state.data = action.payload;
    },
    setChartData: (
      state: IWeatherState,
      action: PayloadAction<ICharData[]>
    ) => {
      state.chartData = action.payload;
    },
    setUnit: (state: IWeatherState, action: PayloadAction<'C' | 'F'>) => {
      state.unit = action.payload;
    },
  },
});

export const weatherAction = weatherSlice.actions;
export default weatherSlice.reducer;
