import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CollapsibleTable from "../dropdown";
import FeedbackForm from "../feedback";



// An array which feeds into a function which creates a node for each week you can click on in the live app
const steps = ["Week 1", "Week 2", "Week 3", "Week 4"];

export default function Timeline() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [buttonClicked, setButtonClicked] = React.useState(false); // initialize state variable

    function handleClick(buttonClicked) {
        console.log("Hello");
        setButtonClicked(!buttonClicked); // update state variable
    }
    
/*
- The typography component is responsible for displaying text on each node
- We suspect that we may need another useState for week description and any other week
identification, the same way they have, picking from an array. UPDATE 1.1:
    - We use the activeStep passed down as props to decide the description by drawing from an array depending on the state of activeStep
*/

    // Counts the total items within the steps array just below the imports
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
     This function checks if the user is on the last step but not all steps are complete, then:
      - It finds the first step from the start that has not been completed, as their comments have explained:
        - Then set the activeStep to the first step from the start that hasn't been completed
    This function is set to onClick on the `Next` button
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

    // When clicked, runs handleStep which changes the buttonClicked state, toggling it between true or false which in turns decides whether table is rendered or not respectively.
    const handleStep = (step, buttonClicked) => {
        setActiveStep(step);
        setButtonClicked(!buttonClicked);
    };

    /*
    When `complete button` is clicked, update `complete` state to set the index value of that key-value pair to true.
      - The index value is the activeStep (state) value at the time
    */
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    // resets all useStates to their starting state. This is set to onClick on the `reset` button
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const [feedbackClicked, setFeedbackClicked] = React.useState(false); // initialize state variable

    function handleFeedback() {
        setFeedbackClicked(!feedbackClicked); // update state variable
    }

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton
                                color="inherit"
                                onClick={() => {
                                    handleStep(index, buttonClicked);
                                }}
                            >
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
                            <Typography sx={{ mt: 2, mb: 1, py: 1, color: "white" }}>
                                {buttonClicked ? (
                                    <CollapsibleTable week={activeStep} />
                                ) : (
                                    <p> </p>
                                )}
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
                                {activeStep !== steps.length && (
                                    completed[activeStep] ? (
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
                                    )
                                )}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
            <div>
                <Button onClick={handleFeedback}>FEEDBACK</Button>
                {feedbackClicked ? (
                    <FeedbackForm handleFeedback={handleFeedback} />
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
}
