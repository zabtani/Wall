import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './NavButtons.module.css';
const NavButton = (props) => {
  const { isNext, error, move } = props;
  return (
    <div className={classes.buttonCon}>
      {isNext && <span className={classes.buttonText}>Next</span>}
      <Fab
        color="primary"
        style={{ backgroundColor: error ? 'red' : null }}
        onClick={() => move(isNext ? 'next' : 'back')}
      >
        {isNext ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
      </Fab>{' '}
      {!isNext && <span className={classes.buttonText}>Back</span>}
    </div>
  );
};
export default NavButton;
///trim values before search img
