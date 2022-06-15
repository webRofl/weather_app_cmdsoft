import React from 'react';
import classes from './ErrorComponent.module.css';

interface ErrorComponentProps {
  error: string;
  isFullScreen?: boolean;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  error,
  isFullScreen = false,
}) => {
  return (
    <div
      className={
        isFullScreen
          ? `${classes.error__wrapper_fullScreen} ${classes.error__wrapper}`
          : classes.error__wrapper
      }
    >
      <span>{error}</span>
    </div>
  );
};

export default ErrorComponent;
