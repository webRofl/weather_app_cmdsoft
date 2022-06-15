import React from 'react';
import arrowLeft from '../../../../assets/images/arrow-left.png';
import arrowLeftDisabled from '../../../../assets/images/arrow-left-disabled.png';
import arrowRight from '../../../../assets/images/arrow-right.png';
import arrowRightDisabled from '../../../../assets/images/arrow-right-disabled.png';
import { useTypedSelector } from '../../../../hooks/redux';
import classes from './Slider.module.css';
import { useDispatch } from 'react-redux';
import { sliderAction } from '../../../../store/slider/slider.slice';

const Slider: React.FC = () => {
  const { pageIndex, pageSize, totalPage } = useTypedSelector(
    (state) => state['slice/slider']
  );

  const dispatch = useDispatch();

  const { setPageIndex } = sliderAction;

  const handleClickArrowLeft = () => dispatch(setPageIndex(false));

  const handleClickArrowRight = () => dispatch(setPageIndex(true));

  return (
    <div className={classes.slider__wrapper}>
      {pageIndex === 0 ? (
        <img
          src={arrowLeftDisabled}
          alt="arrow left"
          className={classes.slider__arrow}
          style={{ cursor: 'default' }}
        />
      ) : (
        <img
          src={arrowLeft}
          alt="arrow left"
          className={classes.slider__arrow}
          onClick={handleClickArrowLeft}
        />
      )}
      {pageIndex + pageSize === totalPage ? (
        <img
          src={arrowRightDisabled}
          alt="arrow left"
          className={classes.slider__arrow}
          style={{ cursor: 'default' }}
        />
      ) : (
        <img
          src={arrowRight}
          alt="arrow left"
          className={classes.slider__arrow}
          onClick={handleClickArrowRight}
        />
      )}
    </div>
  );
};

export default Slider;
