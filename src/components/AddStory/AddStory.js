import React, { useCallback, useState } from 'react';
import classes from './AddStory.module.css';
import ImgList from './ImgList/ImgList';
import Button from '@material-ui/core/Button';
import { validateControl } from './control-validation';
import Input from './Input/Input';
import NavButtons from './NavButtons/NavButtons';
import Story from '../Story/Story';
const initialInputsState = {
  author: '',
  title: '',
  image: { url: null, id: null },
  description: '',
};
function AddStory(props) {
  const steps = [
    //prettier-ignore
    { name: 'author', title: 'Who are you?',label:"Name goes here..."  },
    //prettier-ignore
    { name: 'title', title: 'What is your story name?',label: 'Title goes here...'  },
    { name: 'image', title: 'Which image describe it the most?' },
    //prettier-ignore
    { name: 'description', title: 'So,what happen?', label: 'Story goes here...' },
    { name: 'finish', title: 'Is that OK?' },
  ];
  const [authorStep, titleStep, imageStep, descriptionStep, finishStep] = steps;
  const [postBarShown, setPostBarShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(authorStep);
  const [inputsState, setInputsState] = useState(initialInputsState);

  const [error, setError] = useState(null);
  function submitHandler(event) {
    event.preventDefault();
    const story = {
      author: inputsState.author,
      title: inputsState.title,
      description: inputsState.description,
      image: inputsState.image.url,
    };
    props.onAddStory(story);
    restart();
  }
  const restart = () => {
    setInputsState(initialInputsState);
    setCurrentStep(authorStep);
    setPostBarShown(false);
  };
  const moveControlHandler = (action) => {
    function makeMove() {
      const stepValue = action === 'next' ? 1 : -1;
      const nextControlIdx =
        steps.map((step) => step.name).indexOf(currentStep.name) + stepValue;
      setCurrentStep(steps[nextControlIdx]);
    }
    setError(null);
    if (action === 'next') {
      const checkValue = inputsState[currentStep.name];
      let isError = validateControl(currentStep.name, checkValue);
      !isError ? makeMove() : setError(isError);
    } else {
      makeMove();
    }
  };
  const onImageChoiceHandler = useCallback((img) => {
    setInputsState((prevState) => {
      return {
        ...prevState,
        image: img,
      };
    });
  }, []);

  const textInputsSteps = [authorStep, titleStep, descriptionStep];
  const imageInputDisplay =
    currentStep.name === imageStep.name ? 'block' : 'none';

  const inputChangeHandler = (name, value) => {
    setInputsState((prevState) => {
      return { ...prevState, [name]: value };
    });
    setError(null);
  };
  return (
    <div className={classes.postBarContent}>
      <Button
        style={{ alignSelf: postBarShown ? 'flex-start ' : 'center' }}
        variant="contained"
        color="primary"
        className={classes.postToggleButton}
        onClick={() => setPostBarShown(!postBarShown)}
      >
        {!postBarShown ? 'post your story!' : 'fold'}
      </Button>
      {postBarShown && (
        <div className={classes.postBar}>
          <h2>{currentStep.title}</h2>
          <div className={classes.formError} style={{ opacity: error ? 1 : 0 }}>
            {error}
          </div>

          <form onSubmit={submitHandler}>
            <NavButtons
              currentStep={currentStep.name}
              finishStep={finishStep.name}
              moveControl={moveControlHandler}
              error={error}
            />
            {textInputsSteps.map((step) => {
              return (
                <Input
                  key={step.name}
                  name={step.name}
                  current={currentStep.name}
                  label={step.label}
                  screenWidth={props.screenWidth}
                  onChange={(e) =>
                    inputChangeHandler(step.name, e.target.value)
                  }
                  value={inputsState[step.name]}
                />
              );
            })}
            <ImgList
              display={imageInputDisplay}
              chosenImg={inputsState.image ? inputsState.image.id : null}
              onImageChoice={onImageChoiceHandler}
              searchTerm={inputsState.title}
              screenWidth={props.screenWidth}
            />
            {currentStep.name === finishStep.name && (
              <>
                <Story
                  preview={true}
                  title={inputsState.title}
                  author={inputsState.author}
                  description={inputsState.description}
                  image={inputsState.image.url}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.clickToSearch}
                >
                  Looks good. Post It!
                </Button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
export default AddStory;
///trim values before search img
