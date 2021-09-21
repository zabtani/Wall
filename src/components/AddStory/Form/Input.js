import React from 'react';
import TextField from '@material-ui/core/TextField';
const Input = (props) => {
  const isDescription = props.name === 'description';
  const isMobile = props.screenWidth < 650;
  const standartWidth = isMobile ? '90%' : '35%';
  const descriptionWidth = isMobile ? '90%' : '50%';
  const inputProps = {
    InputLabelProps: { style: { fontSize: isMobile ? 15 : 22 } },
    InputProps: { style: { fontSize: isMobile ? 25 : 45 } },
    value: props.value,
    type: 'text',
    variant: 'filled',
    label: props.label,
    onChange: (event) => props.update(props.name, event),
    onBlur: (event) => props.update(props.name, event),
    style: {
      marginTop: isMobile ? '10%' : '1%',
      width: isDescription ? descriptionWidth : standartWidth,
      display: props.current === props.name ? 'flex' : 'none',
    },
    rows: isDescription ? 5 : 1,
  };
  return isDescription ? (
    <TextField {...inputProps} multiline />
  ) : (
    <TextField {...inputProps} />
  );
};
export default Input;
///trim values before search img
