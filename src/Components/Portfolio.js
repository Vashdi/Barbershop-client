import React, { useEffect, useState } from 'react';
import appService from '../services/appointment';
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
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import SingleHour from './SingleHour';

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
        marginLeft: '500px'

    }
}));


const Portfolio = (props) => {
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    const [selectedDay, setSelectedDay] = useState(" ");
    const hours = ["pick a time..", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    const [hoursToShow, setHoursToShow] = useState(hours);
    const [myHour, setMyHour] = useState("");
    const [disable, setDisable] = useState(false);
    const [appToShow, setAppToShow] = useState([]);
    const [phone, setPhone] = useState("");
    const [newStrict, setNewStrict] = useState([{ before: new Date() }, { daysOfWeek: [1, 6] }]);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

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
    // const [adminSelectedDay, setAdminSelectedDay] = useState(" ");
    // const userFromStorage = window.localStorage['loggedUser'];

    // const strictDays = () => {
    //     const newStrictDays = newStrict.concat(adminSelectedDay);
    //     setNewStrict(newStrictDays);
    // }

    useEffect(() => {
        const now = new Date();
        if (now.getHours() >= 0 && now.getHours() < 0)
            setDisable(true);
        else
            setDisable(false);
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
        appService.checkHours(selectedDay, hours, setHoursToShow);
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

    // const handleDelete = async () => {
    //     appointmentService.deleteAppointment()
    // }

    return (<section id="portfolio">
        {
            storeData.AppointmentReducer.step === 1 &&
            <div>
                <h1>בחר שעה</h1>
                <div style={{ position: 'absolute', top: '490%', left: '45%', columnCount: 5, gap: '100px', marginTop: '25px' }}>
                    {
                        hoursToShow.map((ourHour, index) => {
                            return <SingleHour key={index} hour={ourHour} callback={(data) => setMyHour(data)} />
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
            <>
                <h1 style={{ marginBottom: '40px' }}>:התור שנבחר</h1>
                <h3>:תאריך</h3>
                <h3 style={{ color: 'white' }}>{selectedDay.getDate() + "/" + (selectedDay.getMonth() + 1) + "/" + selectedDay.getFullYear()}</h3>
                <h3>:שעה</h3>
                <h3 style={{ color: 'white' }}>{myHour}</h3><br />
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
            </>
        }
        {
            <>
                <div className="nextApp">
                    <Typography variant="h6" className={classes.title}>
                        <p className="clientNextApp"> התורים הקרובים שלך</p>
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {appToShow.map((apps, index) => {
                                return (<SingleAppointment key={index} appointment={apps} />)
                            })}
                        </List>
                    </div>
                </div>
            </>

        }
        {//{apps.day?.getDate() + "/" + (apps.day?.getMonth() + 1) + "/" + apps.day?.getFullYear() + "  " + "בשעה " + apps.hour}
            /* <ul className="nextApp">
                <p className="header">:הפגישות הקרובות שלך</p>
                {
                    storeData.AppointmentReducer.appointments.map((apps, index) => {
                        return <li key={index}>{apps}</li>
                    })
                }
            </ul> */}

        {/* {
            admin ? <div>
                <DayPicker className="time_table" selectedDays={adminSelectedDay} />
                <input type="button" value="edit" onClick={strictDays} />
            </div> : null
        } */}
    </section>)
}

export default Portfolio;