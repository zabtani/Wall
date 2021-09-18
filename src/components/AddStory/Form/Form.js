import React from 'react';
import ImgList from '../ImgList/ImgList';
import Input from './Input';
import Story from '../../Story/Story';
import Button from '@material-ui/core/Button';

const Form = (props) => {
  const { currentStep, inputs, steps, onSubmit } = props;
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
          <Story
            preview={true}
            title={inputs.title.final}
            author={inputs.author.final}
            description={inputs.description.final}
            image={inputs.image.url}
          />
          <Button variant="contained" color="primary" type="submit">
            Looks good. Post It!
          </Button>
        </>
      )}
    </form>
  );
};
export default Form;
