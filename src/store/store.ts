import { sliderSlice } from './slider/slider.slice';
import { weatherSlice } from './weather/weather.slice';
import { weatherApi } from './weather/weather.api';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [weatherSlice.name]: weatherSlice.reducer,
    [sliderSlice.name]: sliderSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
