import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './NavButtons.module.css';
const NavButtons = (props) => {
  const { currentStep, finishStep, error, moveControl } = props;
  return (
    <div
      className={classes.navigationButtons}
      style={{
        justifyContent: currentStep !== 'author' ? 'space-between' : 'flex-end',
      }}
    >
      {currentStep !== 'author' && (
        <span>
          <Fab color="primary" onClick={() => moveControl('back')}>
            <NavigateBeforeIcon />
          </Fab>{' '}
          Back{' '}
        </span>
      )}
      {currentStep !== finishStep && (
        <span>
          Next{' '}
          <Fab
            color="primary"
            style={{ backgroundColor: error ? 'red' : null }}
            onClick={() => moveControl('next')}
          >
            <NavigateNextIcon />
          </Fab>
        </span>
      )}
    </div>
  );
};
export default NavButtons;
///trim values before search img
