import React from 'react';
import NavButton from './NavButton';
import classes from './NavButtons.module.css';
const NavButtons = (props) => {
  const { currentStep, steps, error, onError } = props;
  const moveHandler = (action) => {
    function makeMove() {
      const stepValue = action === 'next' ? 1 : -1;
      const nextIdx = steps.indexOf(currentStep) + stepValue;
      props.onStepChange(steps[nextIdx]);
    }
    props.onError(null);
    if (action === 'next') {
      let isError = props.onStepValidation(currentStep);
      if (!isError) {
        makeMove();
      } else {
        onError(isError);
        setTimeout(() => {
          onError(false);
        }, 1500);
      }
    } else {
      makeMove();
    }
  };
  const isFirstStep = currentStep === steps[0];
  const isLsatStep = currentStep === steps[steps.length - 1];
  const navStyle = {
    justifyContent: !isFirstStep ? 'space-between' : 'flex-end',
  };

  return (
    <div className={classes.navigationButtons} style={navStyle}>
      {!isFirstStep && (
        <NavButton move={moveHandler} isNext={false} error={false} />
      )}
      {!isLsatStep && (
        <NavButton move={moveHandler} isNext={true} error={error} />
      )}
    </div>
  );
};
export default NavButtons;
///trim values before search img
