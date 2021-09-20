const regex = {
  containSpecialChars: new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/),
  containDigit: new RegExp(/\d/),
};
export const validateControl = (name, value) => {
  let error = null;
  if (name === 'image') {
    if (value === null) {
      error = 'Must choose an image';
    }
  } else {
    const trimmedValue = value.trim();
    switch (name) {
      case 'author':
        if (trimmedValue === '') {
          error = 'Provide your name below';
        } else if (
          regex.containSpecialChars.test(trimmedValue) ||
          regex.containDigit.test(trimmedValue)
        ) {
          error = 'Provide name without special chars or digits';
        } else if (trimmedValue.length < 2) {
          error = 'Name is too short.';
        }
        break;
      case 'title':
        if (trimmedValue === '') {
          error = 'Provide title below';
        }
        break;
      case 'description':
        if (trimmedValue === '') {
          error = 'Provide your story below.';
        }
        break;
      default:
        break;
    }
  }
  return error;
};
