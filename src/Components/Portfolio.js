import React, { useEffect, useState } from 'react';
import appService from '../services/appointment';
import strictService from '../services/Strict';
import appointmentService from '../services/appointment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Portfolio.css'
import SingleAppointment from '../Components/SingleApp/SingleAppointment';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Swal from 'sweetalert2';
import SingleHour from './SingleHour';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStylesModal = makeStyles((theme) => ({
    modal: {
        marginTop: 150,
        alignItems: 'center',
        overflow: 'auto',
        maxHeight: '440px',
        borderRadius: '25px'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const useStyles = makeStyles((theme) => ({
    formControl: {
        position: 'absolute',
        margin: theme.spacing(1),
        minWidth: 320,
        minHeight: 520,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    button: {

    }
}));


const Portfolio = (props) => {
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    const [selectedDay, setSelectedDay] = useState(" ");
    const hours = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    const [hoursToShow, setHoursToShow] = useState(hours);
    const [myHour, setMyHour] = useState("");
    const [appToShow, setAppToShow] = useState([]);
    const [phone, setPhone] = useState("");
    const [newStrict, setNewStrict] = useState([{ before: new Date() }, { daysOfWeek: [1, 6] }]);
    const classes = useStyles();
    const [dense, setDense] = useState(false);
    const classesModal = useStylesModal();
    const [openModal, setOpenModal] = useState(false);
    const [allStrict, setAllStrict] = useState(" ");
    const [hoursToStrict, setHoursToStrict] = useState([]);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handlefinish = () => {
        setSelectedDay(" ");
        setMyHour("");
        addAppointment();
        dispatch({ type: "RESET" });
    };

    const handleReset = () => {
        setSelectedDay(" ");
        setMyHour("");
        dispatch({ type: "RESET" });
    }
    // const [admin, setAdmin] = useState(false);
    const [adminSelectedDay, setAdminSelectedDay] = useState(" ");
    // const userFromStorage = window.localStorage['loggedUser'];

    const strictDays = () => {
        const newStrictDays = newStrict.concat(adminSelectedDay);
        setNewStrict(newStrictDays);
    }
    useEffect(() => {
        const start = async () => {
            const stricts = await strictService.getAllStricts();
            const strictsForWholeDay = stricts.filter(strict => strict.start === "none" && strict.end === "none");
            const hoursToStrict = stricts.filter(strict => strict.start !== "none" || strict.end !== "none");
            const strictsToDates = strictsForWholeDay.map(strict => new Date(strict.day));
            const newStrictsToShow = newStrict.concat(strictsToDates);
            setHoursToStrict(hoursToStrict);
            setNewStrict(newStrictsToShow);
        }
        start();
    }, [])

    useEffect(() => {
        if (myHour === "" || myHour === "בחר שעה" || myHour === "pick a time.." || myHour === " ") {
            props.disableCallback(true);
        } else {
            dispatch({ type: "NEXT" });
        }
    }, [myHour])

    const whenLogged = async () => {
        const user = storeData.AuthReducer.user;
        setPhone(user.phone);
        appService.setToken(user.token);
        const allAppointments = await appointmentService.getAllAppointments(user);
        dispatch({ type: 'REPLACEALL', payload: allAppointments })
        const sortedAppointments = appointmentService.sortAppointments(allAppointments);
        const appointmentsToShowByString = appointmentService.stringAppointments(sortedAppointments);
        setAppToShow(appointmentsToShowByString);
    }

    useEffect(() => {
        const allAppointments = storeData.AppointmentReducer.appointments;
        const sortedAppointments = appointmentService.sortAppointments(allAppointments);
        setAppToShow(appointmentService.stringAppointments(sortedAppointments));
    }, [storeData.AppointmentReducer.appointments])

    useEffect(() => {
        const step = storeData.AppointmentReducer.step;
        if (step === 0) {
            if (selectedDay === " ") {
                props.disableCallback(true);
            }
            else {
                props.disableCallback(false);
            }
        } else if (step === 1) {
            if (myHour === "" || myHour === "בחר שעה" || myHour === "pick a time.." || myHour === " " || !hoursToShow.includes(myHour)) {
                props.disableCallback(true);
            }
            else {
                props.disableCallback(false);
            }
        }

    }, [storeData.AppointmentReducer.step])

    useEffect(() => {
        if (!storeData.AuthReducer.user) {
            dispatch({ type: 'REPLACEALL', payload: [] });
        } else {
            whenLogged();
        }
    }, [storeData.AuthReducer.user])

    useEffect(() => {
        appService.checkHours(selectedDay, hours, setHoursToShow, hoursToStrict);
    }, [selectedDay])

    const addAppointment = async () => {
        if (myHour === "pick a time.." || selectedDay === " ") {
            Swal.fire({
                icon: 'error',
                title: 'Pick An Hour or Date!'
            })
        } else {
            try {
                const appointment = { year: selectedDay.getFullYear(), month: selectedDay.getMonth() + 1, day: selectedDay.getDate(), hour: myHour }
                const resp = await appService.create(appointment);
                dispatch({ type: "ADD", payload: resp });
                Swal.fire({
                    icon: 'success',
                    title: " הפגישה נקבעה לתאריך" + appointment.day + "/" + appointment.month + "/" + appointment.year + " בשעה " + appointment.hour + " בהצלחה"
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            }
        }
    }

    const handleDayClick = async (day, selected) => {
        if (selected.disabled) {
            setSelectedDay(" ");
            props.disableCallback(true);
        }
        else {
            setSelectedDay(day);
            props.disableCallback(false);
        }
    }

    return (<section data-aos="fade-up" id="portfolio">
        <div className="appointmentContainer">
            {
                storeData.AppointmentReducer.step === 1 &&
                <div className="hoursContainer">
                    <h2 className="hourTitle">בחר שעה</h2>
                    <div className="hoursShow">
                        {
                            hoursToShow.map((ourHour, index) => {
                                return <input key={index} className="hourButton" type="button" onClick={() => setMyHour(ourHour)} value={ourHour} />
                            })
                        }
                    </div>

                </div>
            }
            {
                storeData.AppointmentReducer.step === 0 &&
                <>
                    <DayPicker className="time" disabledDays={newStrict} onDayClick={handleDayClick} selectedDays={selectedDay} /><br /><br />
                </>
            }

            {
                storeData.AppointmentReducer.step === 2 &&
                <div className="sum">
                    <div class="boxApp"></div>
                    <h2 className="hourTitle" style={{ marginBottom: '40px' }}>התור שנבחר</h2>
                    <h4 className="hourTitle">:תאריך</h4>
                    <h4 className="hourTitle">{selectedDay.getDate() + "/" + (selectedDay.getMonth() + 1) + "/" + selectedDay.getFullYear()}</h4>
                    <h4 className="hourTitle">:שעה</h4>
                    <h4 className="hourTitle">{myHour}</h4><br />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<AssignmentTurnedInIcon>send</AssignmentTurnedInIcon>}
                        onClick={handlefinish}
                    >
                        Send
                    </Button><br />
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </div>
            }
            <div>
                <button className="showApp" onClick={handleOpenModal}>
                    התורים הקרובים שלי
                </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classesModal.modal}
                    open={openModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openModal}>
                        <div className={classesModal.paper}>
                            <h2 id="transition-modal-title"><p className="clientNextApp"> התורים הקרובים שלי</p></h2>
                            <p id="transition-modal-description"><div className={classes.demo}>
                                <List dense={dense}>
                                    {appToShow.map((apps, index) => {
                                        return (<SingleAppointment key={index} appointment={apps} />)
                                    })}
                                </List>
                            </div></p>
                        </div>
                    </Fade>
                </Modal>
            </div>

        </div>
        {/* {
            admin ? <div>
                <DayPicker className="time_table" selectedDays={adminSelectedDay} />
                <input type="button" value="edit" onClick={strictDays} />
            </div> : null
        } */}
    </section>)
}

export default Portfolio;