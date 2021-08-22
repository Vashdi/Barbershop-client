import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Portfolio from './Portfolio';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
    },
    customLabelStyle: {
        fontSize: "24px"
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['בחר תאריך', 'בחר שעה', 'סיכום'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'בחר תאריך לקביעת תור...';
        case 1:
            return 'בחר שעה שתרצה להסתפר ';
        case 2:
            return '!סיכום הפגישה';
        default:
            return 'Unknown stepIndex';
    }
}

export default function Appointment() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({ type: "NEXT" });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        dispatch({ type: "BACK" });
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
        setActiveStep(0);
    };

    return (
        <section id="appointment">
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step style={{ fontSize: "large" }} key={label}>
                            <StepLabel classes={{ label: classes.customLabelStyle }}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Portfolio step={activeStep} />
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>קבע פגישה חדשה</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
}