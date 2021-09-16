import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = React.forwardRef((props, ref) => {
  const isDescription = props.name === 'description';
  const isMobile = props.screenWidth < 650;
  const inputProps = {
    value: props.value,
    type: 'text',
    variant: 'outlined',
    label: props.label,

    onChange: props.onChange,
    style: {
      marginTop: isMobile ? '10%' : '1%',
      width: isMobile ? '80%' : '35%',
      display: props.current === props.name ? 'flex' : 'none',
    },
    rows: isDescription ? 5 : 1,
  };
  return isDescription ? (
    <TextField {...inputProps} multiline />
  ) : (
    <TextField {...inputProps} />
  );
});
export default Input;
///trim values before search img
