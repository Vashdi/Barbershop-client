import userService from '../../services/user'
import appService from '../../services/appointment'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const SingleAppointment = ({ userPhone, appointment }) => {
    const deleteAppointment = async () => {
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
        window.location.reload();
        await appService.deleteApp(appToDelete.id);
    }
    return (<div style={{ color: "black", fontSize: "125%" }}>
        {appointment} <DeleteIcon fontSize="medium" color="secondary" onClick={deleteAppointment} />
    </div>)
}

export default SingleAppointment;