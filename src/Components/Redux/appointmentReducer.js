const AppointmentReducer = (state = { appointments: [], step: 0 }, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, appointments: [...state.appointments, action.payload] }

        case "REPLACEALL":
            return { ...state, appointments: action.payload }

        case "DELETE":
            return { ...state, appointments: null };

        case "NEXT":
            return { ...state, step: state.step + 1 }

        case "BACK":
            return { ...state, step: state.step - 1 }

        case "RESET":
            return { ...state, step: 0 }

        default:
            return state
    }
}

export default AppointmentReducer