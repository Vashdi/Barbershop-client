import axios from 'axios'
import userService from '../services/user'
const baseUrl = '/appointments'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    try {
        const request = await axios.get(baseUrl);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getByPhone = async (phone) => {
    try {
        const request = await axios.get(baseUrl + "/" + phone);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getByDate = async (date) => {
    try {
        const request = await axios.get(baseUrl);
        const apps = request.data;
        const toSplit = date.split("/", 3);
        const toSplitAgain = toSplit[2].split(" ", 3);
        const day = toSplit[0] - '0';
        const month = toSplit[1] - '0';
        const year = toSplitAgain[0] - '0';
        const hour = toSplitAgain[2];
        const ourDateArr = apps.filter(app => app.day === day && app.month === month && app.year === year && app.hour === hour);
        return ourDateArr[0];
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const deleteApp = async (id) => {
    try {
        let config;
        if (token !== "bearer ") {
            config = {
                headers: { authorization: token },
            }
        }
        const request = await axios.delete(baseUrl + "/" + id, config);
        const dateToDeleteFromClosed = new Date(request.data.year, request.data.month - 1, request.data.day);
        await axios.delete("/closedDays/" + dateToDeleteFromClosed);
        return request.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const create = async (newAppointment, hoursToShow, callback) => {
    try {
        if (token !== "bearer ") {
            const config = {
                headers: { authorization: token },
            }
            const response = await axios.post(baseUrl, newAppointment, config);
            if (hoursToShow.length === 1) {
                const newCloseDay = { date: new Date(newAppointment.year, newAppointment.month - 1, newAppointment.day) };
                await axios.post("/closedDays", newCloseDay);
                callback();
            }
            return response.data
        }
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const checkHours = async (selectedDay, hours, setHoursToShow, hoursToStrict) => {
    try {
        if (selectedDay !== " ") {
            let newHours = " ";
            let newHoursToShowAfterAdminStrict = " ";
            const strictHours = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
            const currDay = new Date().getDate();
            const currMonth = new Date().getMonth() + 1;
            const currYear = new Date().getFullYear();
            const currHour = new Date().getHours();
            const ourDay = selectedDay.getDate();
            const ourMonth = selectedDay.getMonth() + 1;
            const ourYear = selectedDay.getFullYear();
            const searchForHour = hoursToStrict.find(date => new Date(date.day).getDate() === ourDay && new Date(date.day).getFullYear() === ourYear && new Date(date.day).getMonth() === (ourMonth - 1));
            if (searchForHour !== undefined) {
                const start = searchForHour.start;
                const end = searchForHour.end;
                const startIndex = hours.indexOf(start);
                const endIndex = hours.indexOf(end);
                newHours = hours.slice(startIndex, endIndex);
            }
            const resp = await axios.get(`/appointments/day/${ourDay}`);
            const respAdmin = await axios.get(`/adminAppointment/${ourYear}/${ourMonth}/${ourDay}`);
            const appForDay = resp.data;
            const adminAppForDay = respAdmin.data;
            const appForDayAndMonth = appForDay.filter(app => app.month === ourMonth);
            const appForDayAndMonthAndYear = appForDayAndMonth.filter(app => app.year = ourYear);
            let hoursForDate = appForDayAndMonthAndYear.map(appointment => appointment.hour);
            const adminHoursForDate = adminAppForDay.map(appointment => appointment.hour);
            hoursForDate = hoursForDate.concat(adminHoursForDate);
            if (currDay === ourDay && currMonth === ourMonth && currYear === ourYear && currHour >= 0 && currHour < 8) {
                const newHoursToShow = strictHours.filter(theHours => !hoursForDate.includes(theHours));
                newHoursToShowAfterAdminStrict = newHoursToShow;
                if (newHours !== " ") {
                    newHoursToShowAfterAdminStrict = newHours.filter(theHours => newHoursToShow.includes(theHours))
                }
            }
            else {
                newHoursToShowAfterAdminStrict = hours.filter(theHours => !hoursForDate.includes(theHours));
                if (newHours !== " ") {
                    newHoursToShowAfterAdminStrict = newHours.filter(theHours => newHoursToShowAfterAdminStrict.includes(theHours));
                }

            }
            let newHouresToShowFromCurrHour = newHoursToShowAfterAdminStrict;
            if (currDay === ourDay && currMonth === ourMonth && currYear === ourYear) {
                newHouresToShowFromCurrHour = newHoursToShowAfterAdminStrict.filter(theHours => theHours.split(":", 2)[0] - '0' > currHour + 1);
            }
            setHoursToShow(newHouresToShowFromCurrHour);
        }
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const sortAppByStringDate = (datesInString) => {
    console.log(datesInString);
    const dates = [];
    datesInString.map(date => {
        const toSplit = date.split("/", 3);
        const toSplitAgain = toSplit[2].split(" ", 3);
        const day = toSplit[0] - '0';
        const month = toSplit[1] - '0';
        const year = toSplitAgain[0] - '0';
        const splitedAgain = toSplitAgain[2].split(":", 2);
        const hour = splitedAgain[0] - '0';
        const minute = splitedAgain[1] - '0';
        dates.push(new Date(year, month - 1, day, hour, minute))
    })
    const appointmentsToShowSorted = dates.sort(function (a, b) {
        return a - b;
    });
    return appointmentsToShowSorted;
}

const sortAppFromOurDate = (datesInString) => {
    const now = new Date();
    const appointmentsToShow = [];
    datesInString.map(app => {
        const myHour = app.hour.slice(0, 2) - '0';
        const myMinute = app.hour.slice(3, 5) - '0';
        const appDate = new Date(app.year, app.month - 1, app.day, myHour, myMinute);

        if (+appDate > +now) {
            appointmentsToShow.push(appDate);
        }
    })

    const appointmentsToShowSorted = appointmentsToShow.sort(function (a, b) {
        return a - b;
    });

    return appointmentsToShowSorted;
}

const stringAppointments = (appointments) => {
    return appointments.map((apps) => {
        return apps.getDate() + "/" + (apps.getMonth() + 1) + "/" + apps.getFullYear() + " בשעה " + (apps.getHours() > 9 ? apps.getHours() : "0" + apps.getHours()) + ":" + (apps.getMinutes() === 0 ? "00" : "30") + " בתאריך ";
    })
}

const sortAppointments = (appointments) => {
    return sortAppFromOurDate(appointments);
}

const getAllAppointments = async (user) => {
    try {
        const allUsers = await axios.get("/users");
        const data = allUsers.data;
        const allApp = data.filter(oneUser => oneUser.phone === user.phone);
        console.log(allApp);
        if (allApp.length !== 0) {
            return allApp[0].appointments;
        }
        else {
            return [];
        }
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const deleteAppointment = async (userPhone, appointment) => {
    try {
        const getUser = await userService.getByPhone(userPhone);
        const toSplit = appointment.split("/", 3);
        const toSplitAgain = toSplit[2].split(" ", 3);
        const day = toSplit[0] - '0';
        const month = toSplit[1] - '0';
        const year = toSplitAgain[0] - '0';
        const hour = toSplitAgain[2];
        const appToDeleteInArr = getUser[0].appointments.filter(app => app.day === day && app.month === month && app.year === year && app.hour === hour);
        const appToDelete = appToDeleteInArr[0];
        window.alert(" הפגישה שנקבעה לתאריך ה" + day + "/" + month + "/" + year + " בשעה " + hour + " נמחקה בהצלחה");
        await deleteApp(appToDelete.id);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

const getCloseDays = async () => {
    try {
        const resp = await axios.get("/closedDays");
        return resp.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export default { getAll, deleteAppointment, getAllAppointments, sortAppointments, create, setToken, checkHours, getByPhone, stringAppointments, deleteApp, sortAppByStringDate, getByDate, getCloseDays }
