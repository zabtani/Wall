const regex = {
  containSpecialChars: new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/),
  containDigit: new RegExp(/\d/),
};
export const validateControl = (name, value) => {
  let error = null;
  if (name === 'image') {
    if (value === null) {
      error = 'must choose an image';
    }
  } else {
    const trimmedValue = value.trim();
    switch (name) {
      case 'author':
        if (trimmedValue === '') {
          error = 'provide your name above.';
        } else if (
          regex.containSpecialChars.test(trimmedValue) ||
          regex.containDigit.test(trimmedValue)
        ) {
          error = 'provide name with out spiceal chars or digits';
        } else if (trimmedValue.length < 2) {
          error = 'this name is too short.';
        }
        break;
      case 'title':
        if (trimmedValue === '') {
          error = 'provide your title above.';
        }
        break;
      case 'description':
        if (trimmedValue === '') {
          error = 'provide your description above.';
        }
        break;
      default:
        break;
    }
  }
  return error;
};
