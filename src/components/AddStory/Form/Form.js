import React from 'react';
import ImgList from '../ImgList/ImgList';
import Input from './Input';
import Story from '../../Story/Story';
import Button from '@material-ui/core/Button';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Spinner from '../../Spinner';

const Form = (props) => {
  const { currentStep, inputs, steps, onSubmit, reqLoading, reqError } = props;
  const [authorStep, titleStep, imageStep, descriptionStep, finishStep] = steps;
  const textInputsSteps = [authorStep, titleStep, descriptionStep];
  const imageInputDisplay = currentStep === imageStep.name ? 'block' : 'none';
  const isLastStep = currentStep === finishStep.name;
  return (
    <form onSubmit={onSubmit}>
      {textInputsSteps.map((step) => {
        return (
          <Input
            key={step.name}
            name={step.name}
            current={currentStep}
            label={step.label}
            screenWidth={props.screenWidth}
            update={props.updateInput}
            value={inputs[step.name].current}
          />
        );
      })}
      <ImgList
        display={imageInputDisplay}
        chosenImg={inputs.image ? inputs.image.id : null}
        onImageChoice={props.onImageChoice}
        searchTerm={inputs.title.final}
        screenWidth={props.screenWidth}
      />

      {isLastStep && (
        <>
          {!reqLoading && (
            <Button
              startIcon={
                reqError ? <SentimentDissatisfiedIcon /> : <ThumbUpIcon />
              }
              variant="contained"
              color="primary"
              type="submit"
            >
              {reqError ? 'try again' : 'Sure, Post It!'}
            </Button>
          )}
          {reqError ? (
            <b> {reqError} </b>
          ) : !reqLoading ? (
            <Story
              preview={true}
              title={inputs.title.final}
              author={inputs.author.final}
              description={inputs.description.final}
              image={inputs.image.url}
            />
          ) : (
            <Spinner />
          )}
        </>
      )}
    </form>
  );
};
export default Form;
