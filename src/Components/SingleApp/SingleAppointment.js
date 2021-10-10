import appService from '../../services/appointment'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import './SingleAppointment.css'
import Swal from 'sweetalert2';

const SingleAppointment = ({ appointment, callback }) => {
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteAppointment = async () => {
        try {
            const toSplit = appointment.split("/", 3);
            const toSplitAgain = toSplit[2].split(" ", 3);
            const day = toSplit[0] - '0';
            const month = toSplit[1] - '0';
            const year = toSplitAgain[0] - '0';
            const hour = toSplitAgain[2];
            const appToDelete = storeData.AppointmentReducer.appointments.find(app => app.day === day && app.month === month && app.year === year && app.hour === hour);
            const idOfApp = appToDelete.id;
            await appService.deleteApp(appToDelete.id);
            dispatch({ type: "DELETE", payload: idOfApp });
            callback(new Date(year, month - 1, day));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: error.response.data,
            })
        }
    }
    return (
        <ListItem>
            <ListItemText
                primary={<h1 className="appText">{appointment}</h1>}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ transform: 'scale(1.5)' }} color='secondary' onClick={deleteAppointment} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default SingleAppointment;