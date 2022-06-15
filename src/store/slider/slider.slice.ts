import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISliderState } from './slider.type';

const initialState: ISliderState = {
  pageSize: 3,
  pageIndex: 0,
  totalPage: 0,
};

export const sliderSlice = createSlice({
  name: 'slice/slider',
  initialState,
  reducers: {
    setPageIndex: (state: ISliderState, action: PayloadAction<boolean>) => {
      if (action.payload) state.pageIndex += 1;
      else state.pageIndex -= 1;
    },
    setTotalPage: (state: ISliderState, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },
  },
});

export const sliderAction = sliderSlice.actions;
export default sliderSlice.reducer;
