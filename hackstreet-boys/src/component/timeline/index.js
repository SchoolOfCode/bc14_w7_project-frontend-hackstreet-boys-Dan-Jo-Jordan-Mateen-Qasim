import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CollapsibleTable from "../dropdown";

// An array which feeds into a function which creates a node for each week
const steps = ["Week 1", "Week 2", "Week 3", "Week 4"];

export default function Timeline() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [display, setDisplay] = React.useState(true)

/*
- The typography component is responsible for displaying text on each node
- We suspect that we may need another useState for week description and any other week
identification, the same way they have, picking from an array.



1. Make sure the table has data in it and is different to each other

2. Make sure the table is visible and hides as we want

3. As weeks


*/

    const totalSteps = () => {
        return steps.length;
    };

    // Scans and returns the useState object `completed` for all of the keys within the object and puts it in an array and then the length of that array
    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    // Returns boolean based on whether the active step is the final step. Keep in mind activeStep starts at 0, so at step 1, activeStep === 0
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    // Returns boolean based if all the completed steps are the same length as the total steps.
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    /*
     This function checks if the user is on the last step but not all steps are complete:
      - Then  find the first step from the start that has not been completed, as their comments have explained:
        - Then set the activeStep to the first step from the start that hasn't been completed
    This is on the `Next` button
    */
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()

                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    // Linked to the `Back` button - finds the status of activeStep in the current scenario, then decrements it by 1, taking the page back to the previous step
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Setting the value of activeStep whatever the value of step is, step is set by index when the StepButton is clicked - the labels beside the numbers on the timeline
    /*
    This is the function we initially tried to enable and disable the dropdown component 
    */
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleDisplay = (display) => {
      if (display === true) {
        console.log(display)
        setDisplay(false)
      } else {
        console.log(display)
        setDisplay(true)
      }
    }

    /*
    When `complete button` is clicked, update `complete` state to set the index value of that key-value pair to true.
      - The index value is the activeStep value at the time
    */
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    // resets all useStates to their starting state
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={() => {handleStep(index); handleDisplay(display)}}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            <CollapsibleTable week={activeStep} />
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography
                                        variant="caption"
                                        sx={{ display: "inline-block" }}
                                    >
                                        Week {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? "Finish"
                                            : "Complete Step"}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
