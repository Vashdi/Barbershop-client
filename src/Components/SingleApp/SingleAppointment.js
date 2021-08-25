import userService from '../../services/user'
import appService from '../../services/appointment'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

const SingleAppointment = ({ appointment }) => {
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteAppointment = async () => {
        const toSplit = appointment.split("/", 3);
        const toSplitAgain = toSplit[2].split(" ", 3);
        const day = toSplit[0] - '0';
        const month = toSplit[1] - '0';
        const year = toSplitAgain[0] - '0';
        const hour = toSplitAgain[2];
        const appToDelete = storeData.AppointmentReducer.appointments.find(app => app.day === day && app.month === month && app.year === year && app.hour === hour);
        const idOfApp = appToDelete.id;
        dispatch({ type: "DELETE", payload: idOfApp });
        await appService.deleteApp(appToDelete.id);
    }
    return (
        <ListItem>
            <ListItemText
                primary={appointment}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color='secondary' onClick={deleteAppointment} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default SingleAppointment;