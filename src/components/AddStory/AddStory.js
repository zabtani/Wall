import React, { useCallback, useState } from 'react';
import classes from './AddStory.module.css';
import NavButtons from './NavButtons/NavButtons';
import { validateControl } from './control-validation';
import Button from '@material-ui/core/Button';
import Form from './Form/Form';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CloseIcon from '@material-ui/icons/Close';

const initialInputsState = {
  author: { current: '', final: null },
  title: { current: '', final: null },
  image: { url: null, id: null },
  description: { current: '', final: null },
};
function AddStory(props) {
  //prettier-ignore
  const steps = [
    { name: 'author', title: 'Who are you?',label:"Your name" },
    { name: 'title', title: 'What is your story name?',label: 'Story title'  },
    { name: 'image', title: 'Which image describes it the most?' },
    { name: 'description', title: 'So,what happen?', label: 'Your story' },
    { name: 'finish', title: 'Is that OK?' },
  ];
  const [postBarShown, setPostBarShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [inputsState, setInputsState] = useState(initialInputsState);
  const [error, setError] = useState(null);
  function submitHandler(event) {
    event.preventDefault();
    const story = {
      author: inputsState.author.final,
      title: inputsState.title.final,
      description: inputsState.description.final,
      image: inputsState.image.url,
    };
    props.onAddStory(story);
    restart();
  }
  const restart = () => {
    setInputsState(initialInputsState);
    setCurrentStep(steps[0]);
    setPostBarShown(false);
  };

  const onImageChoiceHandler = useCallback((img) => {
    setInputsState((prevState) => {
      return {
        ...prevState,
        image: img,
      };
    });
  }, []);

  const updateInputHandler = (name, event) => {
    let value = event.target.value;
    let eventName = event._reactName;
    setInputsState((prevState) => {
      let update;
      if (eventName === 'onChange') {
        update = { ...prevState[name], current: value };
      } else if (eventName === 'onBlur') {
        update = { ...prevState[name], final: value };
      }
      return {
        ...prevState,
        [name]: update,
      };
    });
    setError(null);
  };
  const togglePostBarHandler = () => {
    postBarShown ? restart() : setPostBarShown((prevState) => !prevState);
  };
  const onStepChangeHandler = (stepName) => {
    const step = steps.filter((step) => step.name === stepName)[0];
    setCurrentStep(step);
  };
  const onStepValidationHandler = (name) => {
    const checkValue =
      name === 'image' ? inputsState.image : inputsState[name].current;
    let result = validateControl(name, checkValue);
    return result;
  };
  return (
    <div className={classes.postBar}>
      {postBarShown && (
        <div className={classes.postBarContent}>
          <h2>{currentStep.title}</h2>
          <div className={classes.formError} style={{ opacity: error ? 1 : 0 }}>
            {error}
          </div>
          <NavButtons
            currentStep={currentStep.name}
            steps={steps.map((step) => step.name)}
            onStepChange={(stepName) => onStepChangeHandler(stepName)}
            onStepValidation={onStepValidationHandler}
            onError={setError}
            error={error}
          />
          <Form
            currentStep={currentStep.name}
            inputs={inputsState}
            steps={steps}
            onSubmit={submitHandler}
            updateInput={updateInputHandler}
            onImageChoice={onImageChoiceHandler}
            screenWidth={props.screenWidth}
          />
        </div>
      )}
      <Button
        style={{ alignSelf: postBarShown ? 'flex-start ' : 'center' }}
        variant="contained"
        color="primary"
        className={classes.postToggleButton}
        onClick={togglePostBarHandler}
        startIcon={!postBarShown ? <WhatshotIcon /> : <CloseIcon />}
      >
        {!postBarShown ? 'Post your story' : 'Cancel'}
      </Button>
    </div>
  );
}
export default AddStory;
