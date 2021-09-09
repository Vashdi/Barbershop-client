import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Portfolio from './Portfolio';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckCircle from '@material-ui/icons/CheckCircle';

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 30,
        alignItems: 'center',
    },
    active: {
        color: 'orange',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233, 154, 64) 50%, rgb(221, 110, 19) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233, 154, 64) 50%, rgb(221, 110, 19) 100%)',
        },
    },
    line: {
        height: 5,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 55,
        height: 55,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233, 154, 64) 50%, rgb(221, 110, 19) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233, 154, 64) 50%, rgb(221, 110, 19) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <CalendarTodayIcon fontSize="large" />,
        2: <ScheduleIcon fontSize="large" />,
        3: <CheckCircle fontSize="large" />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: 'whitesmoke'
    },
    step_label_root: {
        fontSize: '20px',
        background: 'whitesmoke'
    },
    button: {
        marginRight: theme.spacing(1),
        fontSize: "15px",
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['בחר יום לפגישה', 'בחר שעה לפגישה', 'סיכום'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'קבע יום לפגישה';
        case 1:
            return 'קבע שעה לפגישה';
        case 2:
            return 'סיכום';
        default:
            return 'Unknown step';
    }
}

export default function Appointment() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [disableNext, setDisableNext] = useState(true);
    const storeData = useSelector(state => state);
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
                <Stepper alternativeLabel activeStep={storeData.AppointmentReducer.step} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel classes={{ label: classes.step_label_root }} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Portfolio step={activeStep} disableCallback={(isDisable) => {
                    setDisableNext(isDisable)
                }} />
                {
                    storeData.AppointmentReducer.step !== steps.length - 1 && <div>
                        <Typography className={classes.instructions}></Typography>
                        <div>
                            <Button disabled={storeData.AppointmentReducer.step === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                                disabled={disableNext}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                }
            </div>
        </section >
    );
}