import React, { useEffect, useState } from 'react';
import appService from '../services/appointment';
import appointmentService from '../services/appointment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Portfolio.css'
import SingleAppointment from '../Components/SingleApp/SingleAppointment';
import { useSelector } from 'react-redux';

const Portfolio = (props) => {
    const storeData = useSelector(state => state);
    const [selectedDay, setSelectedDay] = useState(" ");
    const hours = ["pick a time..", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    const [hoursToShow, setHoursToShow] = useState(hours);
    const [myHour, setMyHour] = useState("");
    const [disable, setDisable] = useState(false);
    const [appToShow, setAppToShow] = useState([]);
    const [phone, setPhone] = useState("");
    const [newStrict, setNewStrict] = useState([{ before: new Date() }, { daysOfWeek: [1, 6] }]);
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
        async function whenLogged() {
            const loggedUserJSON = window.localStorage.getItem('loggedUser')
            if (loggedUserJSON) {
                const user = JSON.parse(loggedUserJSON)
                setPhone(user.phone);
                appService.setToken(user.token)
                const appointmentsToShowByString = await appointmentService.sortAppointments(user);
                setAppToShow(appointmentsToShowByString);
            }
        }
        whenLogged();
    }, [])

    useEffect(() => {
        appService.checkHours(selectedDay, hours, setHoursToShow);
    }, [selectedDay])

    const addAppointment = async () => {
        if (myHour === "pick a time.." || selectedDay === " ")
            window.alert("Pick An Hour or Date!")
        else {
            const appointment = { year: selectedDay.getFullYear(), month: selectedDay.getMonth() + 1, day: selectedDay.getDate(), hour: myHour }
            await appService.create(appointment);
            window.location.reload();
            window.alert(" הפגישה נקבעה לתאריך ה" + appointment.day + "/" + appointment.month + "/" + appointment.year + " בשעה " + appointment.hour + " בהצלחה");
        }
    }

    const handleDayClick = async (day, { selected }) => {
        if (selected)
            setSelectedDay(" ");
        else {
            setSelectedDay(day);
        }
    }
    return (<section id="portfolio">
        <h1>קבע פגישה עכשיו</h1>
        {
            storeData.AppointmentReducer.step === 1 && <select className="time_button" onChange={(e) => {
                setMyHour(e.target.value)
            }}>
                {
                    hoursToShow.map((ourHour, index) => {
                        return <option key={index} value={ourHour}> {ourHour}</option>
                    })
                }
            </select>
        }
        {
            console.log(storeData)

        }
        {
            storeData.AppointmentReducer.step === 0 &&
            <>
                <DayPicker className="time" disabledDays={newStrict} onDayClick={handleDayClick} selectedDays={selectedDay} /><br /><br />
                <input type="button" disabled={disable ? true : false} className={disable ? "closed" : "book_now"} value="קבע תור" onClick={addAppointment} />
                {
                    <ul className="nextApp">
                        <p className="header">:הפגישות הקרובות שלך</p>
                        {
                            appToShow.map((apps, index) => {
                                return <SingleAppointment userPhone={phone} appointment={apps} key={index} />
                            })
                        }
                    </ul>
                }
            </>
        }

        {/* {
            admin ? <div>
                <DayPicker className="time_table" selectedDays={adminSelectedDay} />
                <input type="button" value="edit" onClick={strictDays} />
            </div> : null
        } */}
    </section>)
}

export default Portfolio;