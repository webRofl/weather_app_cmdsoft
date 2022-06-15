import React from 'react';
import classes from './Preloader.module.css';

interface PreloaderProps {
  isFullScreen?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isFullScreen = false }) => {
  return (
    <div
      className={
        isFullScreen
          ? `${classes.preloader__wrapper_fullScreen} ${classes.preloader__wrapper}`
          : classes.preloader__wrapper
      }
    >
      <span>Загрузка ...</span>
    </div>
  );
};

export default Preloader;
